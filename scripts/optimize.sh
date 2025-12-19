#!/bin/bash

# Media Optimization Script
# Optimizes images to WebP and compresses videos with ffmpeg

set -e  # Exit on error

echo "🎨 Starting media optimization..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check dependencies
echo "Checking dependencies..."
command -v ffmpeg >/dev/null 2>&1 || { echo "❌ ffmpeg is required but not installed. Install with: brew install ffmpeg (macOS) or apt-get install ffmpeg (Linux)"; exit 1; }
command -v convert >/dev/null 2>&1 || { echo "❌ imagemagick is required but not installed. Install with: brew install imagemagick (macOS) or apt-get install imagemagick (Linux)"; exit 1; }

echo "✅ Dependencies found"

# Create optimized directory if it doesn't exist
mkdir -p public/optimized

# ============================================
# IMAGE OPTIMIZATION
# ============================================

echo ""
echo -e "${BLUE}📸 Optimizing images to WebP...${NC}"

# Optimize hoc-logo.png to WebP
if [ -f "public/hoc-logo.png" ]; then
  echo "  Converting hoc-logo.png → hoc-logo.webp"
  convert public/hoc-logo.png -quality 85 -define webp:method=6 public/hoc-logo.webp

  # Get file sizes for comparison
  ORIGINAL_SIZE=$(du -h public/hoc-logo.png | cut -f1)
  NEW_SIZE=$(du -h public/hoc-logo.webp | cut -f1)
  echo -e "  ${GREEN}✓${NC} Created hoc-logo.webp (${ORIGINAL_SIZE} → ${NEW_SIZE})"
else
  echo "  ⚠️  hoc-logo.png not found, skipping"
fi

# ============================================
# VIDEO OPTIMIZATION
# ============================================

echo ""
echo -e "${BLUE}🎬 Optimizing video...${NC}"

if [ -f "public/background.webm" ]; then
  echo "  Compressing background.webm..."

  # Get original size
  ORIGINAL_VIDEO_SIZE=$(du -h public/background.webm | cut -f1)

  # Backup original
  if [ ! -f "public/background.original.webm" ]; then
    echo "  Creating backup: background.original.webm"
    cp public/background.webm public/background.original.webm
  fi

  # Compress video with ffmpeg
  # Two-pass encoding for best quality at target bitrate
  # Target: ~2-3MB for reasonable length video

  # First pass
  ffmpeg -i public/background.webm \
    -c:v libvpx-vp9 \
    -b:v 800k \
    -maxrate 1200k \
    -bufsize 2400k \
    -cpu-used 2 \
    -row-mt 1 \
    -pass 1 \
    -an \
    -f webm \
    -y /dev/null

  # Second pass
  ffmpeg -i public/background.webm \
    -c:v libvpx-vp9 \
    -b:v 800k \
    -maxrate 1200k \
    -bufsize 2400k \
    -cpu-used 2 \
    -row-mt 1 \
    -pass 2 \
    -c:a libopus \
    -b:a 96k \
    -f webm \
    -y public/background-optimized.webm

  # Clean up pass files
  rm -f ffmpeg2pass-0.log

  # Replace original with optimized
  mv public/background-optimized.webm public/background.webm

  NEW_VIDEO_SIZE=$(du -h public/background.webm | cut -f1)
  echo -e "  ${GREEN}✓${NC} Compressed background.webm (${ORIGINAL_VIDEO_SIZE} → ${NEW_VIDEO_SIZE})"
  echo "  Original backed up to: background.original.webm"
else
  echo "  ⚠️  background.webm not found, skipping"
fi

# ============================================
# SUMMARY
# ============================================

echo ""
echo -e "${GREEN}✨ Optimization complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Test the optimized assets in your app"
echo "2. If hoc-logo.webp looks good, update experiences.json"
echo "3. The original video is backed up as background.original.webm"
echo ""
