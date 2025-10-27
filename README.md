# Universal Resume

A clean, professional HTML resume template that can be easily customized and converted to PDF. This template features a modern design with a two-column layout, making it perfect for showcasing your professional experience and skills.

## Features

- Clean, modern design optimized for both web and print
- Responsive layout that works on all devices
- Easy PDF generation using Puppeteer
- Customizable styling with CSS
- Professional typography and spacing
- Print-optimized versions available

## Setup

### Prerequisites

- Node.js (for PDF generation)
- A modern web browser

### Installation

1. Clone or download this repository:
   ```bash
   git clone <repository-url>
   cd universal-resume
   ```

2. Install dependencies for PDF generation:
   ```bash
   npm install puppeteer
   ```

### Usage

#### Viewing the Resume

1. Open `index.html` in your web browser to view the resume
2. For print-optimized versions, open `print-optimized.html` or `print-optimized-nl.html`

#### Customizing Content

1. Edit `index.html` to update your personal information, experience, and skills
2. Modify `styles.css` to customize the appearance and styling
3. Replace `avatar.jpg` with your own profile photo

#### Generating PDF

To generate a PDF version of your resume:

```bash
node generate-pdf.js
```

This will create a PDF file named `niels-uitterdijk-resume.pdf` in the project directory.

#### Print Instructions

For manual printing instructions and tips, open `print-instructions.html` in your browser.

## File Structure

- `index.html` - Main resume file
- `styles.css` - Custom styling
- `docs/build.css` - Base CSS framework
- `generate-pdf.js` - PDF generation script
- `print-optimized.html` - Print-optimized version
- `print-optimized-nl.html` - Dutch print-optimized version
- `print-instructions.html` - Printing guidelines
- `avatar.jpg` - Profile photo

## Customization

The template is designed to be easily customizable. Key areas to modify:

1. **Personal Information**: Update name, contact details, and profile summary in `index.html`
2. **Styling**: Modify colors, fonts, and layout in `styles.css`
3. **Content Sections**: Add, remove, or rearrange sections as needed
4. **Photo**: Replace `avatar.jpg` with your own professional headshot

## Browser Compatibility

This resume template works in all modern browsers and is optimized for:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.