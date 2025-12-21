#!/usr/bin/env node
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

// Configuration
const THUMBNAIL_WIDTH = 800; // Max width for thumbnails
const THUMBNAIL_QUALITY = 80; // Quality (1-100)
const THUMBNAIL_SUFFIX = '-thumb'; // Suffix for thumbnail files

// Supported image formats
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.avif'];

/**
 * Check if a file is an image
 */
function isImageFile(filename) {
  const ext = extname(filename).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

/**
 * Check if a file is already a thumbnail
 */
function isThumbnail(filename) {
  return basename(filename, extname(filename)).endsWith(THUMBNAIL_SUFFIX);
}

/**
 * Generate thumbnail filename
 */
function getThumbnailPath(originalPath) {
  const ext = extname(originalPath);
  const nameWithoutExt = basename(originalPath, ext);
  const dir = dirname(originalPath);
  return join(dir, `${nameWithoutExt}${THUMBNAIL_SUFFIX}${ext}`);
}

/**
 * Generate a thumbnail for an image
 */
async function generateThumbnail(imagePath, thumbnailPath) {
  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();

    // Skip if image is already smaller than thumbnail size
    if (metadata.width <= THUMBNAIL_WIDTH) {
      console.log(`  ⏭️  Skipping ${basename(imagePath)} (already small enough: ${metadata.width}px)`);
      return false;
    }

    // Generate thumbnail
    await image
      .resize(THUMBNAIL_WIDTH, null, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({ quality: THUMBNAIL_QUALITY, mozjpeg: true })
      .png({ quality: THUMBNAIL_QUALITY, compressionLevel: 9 })
      .webp({ quality: THUMBNAIL_QUALITY })
      .toFile(thumbnailPath);

    const originalSize = (await stat(imagePath)).size;
    const thumbnailSize = (await stat(thumbnailPath)).size;
    const savings = ((1 - thumbnailSize / originalSize) * 100).toFixed(1);

    console.log(`  ✅ ${basename(imagePath)} → ${basename(thumbnailPath)}`);
    console.log(`     ${formatBytes(originalSize)} → ${formatBytes(thumbnailSize)} (${savings}% smaller)`);

    return true;
  } catch (error) {
    console.error(`  ❌ Error processing ${basename(imagePath)}:`, error.message);
    return false;
  }
}

/**
 * Format bytes to human-readable size
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
}

/**
 * Recursively process a directory
 */
async function processDirectory(dirPath) {
  const entries = await readdir(dirPath, { withFileTypes: true });
  let processed = 0;

  for (const entry of entries) {
    const fullPath = join(dirPath, entry.name);

    if (entry.isDirectory()) {
      // Recursively process subdirectories
      processed += await processDirectory(fullPath);
    } else if (entry.isFile() && isImageFile(entry.name) && !isThumbnail(entry.name)) {
      // Process image files
      const thumbnailPath = getThumbnailPath(fullPath);

      // Check if thumbnail already exists
      try {
        await stat(thumbnailPath);
        console.log(`  ⏭️  Thumbnail already exists: ${basename(thumbnailPath)}`);
        continue;
      } catch {
        // Thumbnail doesn't exist, generate it
      }

      const generated = await generateThumbnail(fullPath, thumbnailPath);
      if (generated) processed++;
    }
  }

  return processed;
}

/**
 * Main function
 */
async function main() {
  console.log('🖼️  Thumbnail Generator\n');
  console.log(`📁 Scanning: ${PUBLIC_DIR}`);
  console.log(`📐 Thumbnail size: ${THUMBNAIL_WIDTH}px wide`);
  console.log(`🎨 Quality: ${THUMBNAIL_QUALITY}%\n`);

  try {
    const processed = await processDirectory(PUBLIC_DIR);
    console.log(`\n✨ Done! Generated ${processed} thumbnail${processed !== 1 ? 's' : ''}.`);

    if (processed > 0) {
      console.log('\n💡 Next steps:');
      console.log('   1. Update your projects.json to use thumbnails:');
      console.log('      {');
      console.log('        "type": "image",');
      console.log('        "url": "/project/image-thumb.png",  // Thumbnail');
      console.log('        "full_url": "/project/image.png"     // Original');
      console.log('      }');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
