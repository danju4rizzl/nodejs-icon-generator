# Icon Generator

## Description

This NodeJS application generates icons in various formats and sizes from a source image. It uses `sharp` for image manipulation to create PNG, macOS (.icns), and Windows (.ico) icon files.

## Installation

To install the application and its dependencies, run:

```bash
npm install
```

## Usage

To generate icons, run the following command:

```bash
node index.js <source_image_path> <output_directory>
```

-   `<source_image_path>`: Path to the source image (PNG, JPG, or JPEG).
-   `<output_directory>`: Directory where the generated icons will be saved.

**Example:**

```bash
node index.js original.png output
```

This command will generate the following icons in the `output` directory:

-   `32x32.png`
-   `128x128.png`
-   `256x256.png`
-   `icon.icns.png` (macOS icon - PNG format)
-   `icon.ico.png` (Windows icon - PNG format)

**Note:** 
- The application currently saves macOS and Windows icons as PNG files due to the lack of system tools for converting to `.icns` and `.ico` formats. 
- For actual `.icns` and `.ico` format generation, you would need to use tools like `iconutil` (macOS) and `convert` (ImageMagick for Windows) respectively, which are not included in this application.

## Configuration

There are no specific configuration files or environment variables for this application. The output directory is specified as a command-line argument.

## Technology Stack

-   NodeJS
-   sharp: For image manipulation

## Project Structure

-   `index.js`: Main application logic.
-   `package.json`: Project dependencies and scripts.
-   `output/`: (Output directory) Contains generated icons.

## License

[Specify License here, e.g., MIT]

## Contributing Guidelines

Contributions are welcome! Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Submit a pull request to the main branch.

---

This README provides a basic guide for developers. You can expand it with more details as needed.