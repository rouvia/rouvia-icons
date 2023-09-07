const fs = require("fs");
const path = require("path");

// Source and destination directories
const svgDir = "./assets"; // the current directory
const componentsDir = "./components";

// Convert a filename to camelCase
const toPascalCase = (str) => {
  return str
    .replace(/[-_](.)/g, (_, p1) => p1.toUpperCase()) // Convert underscore/hyphen followed by a letter to uppercase
    .replace(/(^[a-z])/, (_, p1) => p1.toUpperCase()); // Convert the first letter to uppercase
};

// Check if componentsDir exists; if not, create it
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir);
}

// Read the list of files in the directory
fs.readdir(svgDir, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach((file) => {
    if (path.extname(file) === ".svg") {
      const componentName = `${toPascalCase(path.basename(file, ".svg"))}Icon`;
      const componentFileName = `${componentName}.tsx`;

      // Create the React component string
      const componentString = `import React from 'react';\nimport { ReactComponent as Icon } from '../assets/${file}';\n\nconst ${componentName}: React.FC = () => {\n  return <Icon />;\n};\n\nexport { ${componentName} };\n`;

      // Write the component file
      fs.writeFile(
        path.join(componentsDir, componentFileName),
        componentString,
        "utf8",
        (err) => {
          if (err) {
            console.error(
              `Error while writing component ${componentName}`,
              err
            );
          } else {
            console.log(`Successfully generated ${componentName}`);
          }
        }
      );
    }
  });
});
