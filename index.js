import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

async function generateIcons(sourceImagePath, outputDir) {
  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const sourceImage = sharp(sourceImagePath);

    // Generate PNG icons
    await sourceImage.resize(32, 32).png().toFile(path.join(outputDir, '32x32.png'));
    await sourceImage.resize(128, 128).png().toFile(path.join(outputDir, '128x128.png'));
    await sourceImage.resize(256, 256).png().toFile(path.join(outputDir, '256x256.png'));

    // Generate macOS icon (.icns) - using sharp
    await sourceImage.resize(1024, 1024).png().toFile(path.join(outputDir, 'icon.icns.png')); //Temporary file
    // Convert to .icns (requires additional tools like 'iconutil' which may not be available)
    // For now, just save as a large PNG

    // Generate Windows icon (.ico) - using sharp
    await sourceImage.resize(256, 256).png().toFile(path.join(outputDir, 'icon.ico.png')); //Temporary file
    // Convert to .ico (requires additional tools like 'convert' which may not be available)
    // For now, just save as a PNG

    console.log('Icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

// Get source image path and output directory from command-line arguments
const sourceImagePath = process.argv[2];
const outputDir = process.argv[3];

if (!sourceImagePath || !outputDir) {
  console.log('Usage: node index.js <source_image_path> <output_directory>');
  process.exit(1);
}

generateIcons(sourceImagePath, outputDir);