const readline = require('readline');
const fs = require('fs');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to generate SVG icon
function generateSVG(shape, shapeColor, text, textColor) {
  const svgContent = `
    <svg width="100" height="100">
      <rect width="100" height="100" fill="${shapeColor}" />
      <text x="50%" y="50%" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>
  `;
  return svgContent;
}

// Function to save SVG icon to file
function saveSVGToFile(svgContent) {
  fs.writeFileSync('icon.svg', svgContent);
  console.log('SVG icon created successfully!');
}

// Prompt user for input
rl.question('Enter shape (e.g., circle, triangle, square): ', (shape) => {
  rl.question('Enter shape color: ', (shapeColor) => {
    rl.question('Enter text: ', (text) => {
      rl.question('Enter text color: ', (textColor) => {
        const svgContent = generateSVG(shape, shapeColor, text, textColor);
        saveSVGToFile(svgContent);
        rl.close();
      });
    });
  });
});