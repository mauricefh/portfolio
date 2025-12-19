# Media Optimization Scripts

## optimize.sh

Optimizes images and videos in the `/public` directory.

### Prerequisites

Install required tools:

**macOS (Homebrew):**
```bash
brew install ffmpeg imagemagick
```

**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install ffmpeg imagemagick
```

**Arch Linux:**
```bash
sudo pacman -S ffmpeg imagemagick
```

### Usage

```bash
pnpm optimize
```

### What it does

**Images:**
- Converts PNG files to WebP format
- 85% quality, method 6 (best compression)
- Current targets: hoc-logo.png

**Videos:**
- Compresses background.webm using VP9 codec
- Two-pass encoding for optimal quality
- Target bitrate: 800kbps (reduces 7.2MB → ~2-3MB)
- Creates backup: background.original.webm

### After running

1. Test the site: `pnpm dev`
2. Check video quality and file size
3. If hoc-logo.webp looks good, update references in `src/data/experiences.json`

## Video Compression Settings

```bash
-c:v libvpx-vp9         # VP9 codec (best for WebM)
-b:v 800k               # Target video bitrate (800 kbps)
-maxrate 1200k          # Maximum bitrate peaks
-bufsize 2400k          # Buffer size for rate control
-cpu-used 2             # Encoding speed (0=slowest/best, 5=fastest/worst)
-row-mt 1               # Multi-threading
-pass 1/2               # Two-pass encoding for better quality
-c:a libopus            # Opus audio codec
-b:a 96k                # Audio bitrate
```

### Adjusting Compression

**For better quality (larger file):**
- Increase `-b:v 800k` to `-b:v 1200k`
- Increase `-maxrate 1200k` to `-maxrate 1800k`

**For smaller file (lower quality):**
- Decrease `-b:v 800k` to `-b:v 500k`
- Decrease `-maxrate 1200k` to `-maxrate 800k`

**For faster encoding (slightly worse quality):**
- Increase `-cpu-used 2` to `-cpu-used 4`

## Expected Results

**Before:**
- `background.webm`: 7.2MB
- `hoc-logo.png`: 60KB
- **Total**: ~7.26MB

**After:**
- `background.webm`: ~2-3MB (60-70% reduction)
- `hoc-logo.webp`: ~20-30KB (50-60% reduction)
- **Total**: ~2-3MB
- **Savings**: ~4-5MB

## Safety Features

- ✅ Creates backup of original video (`background.original.webm`)
- ✅ Checks for dependencies before running
- ✅ Only processes existing files (skips missing files)
- ✅ Clear output messages showing progress
- ✅ File size comparison before/after
