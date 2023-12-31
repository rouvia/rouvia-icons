const fs = require("fs");
const path = require("path");

// Source and destination directories
const svgDir = "src/assets";
const componentsDir = "src/components";

const replaceColorInSvg = (filePath) => {
  const fileContent = fs.readFileSync(filePath, "utf8");

  // Replace all hex colors (both 3-digit and 6-digit) with 'currentColor'
  const updatedContent = fileContent.replace(
    /#([0-9a-fA-F]{3}){1,2}/g,
    "currentColor"
  );

  fs.writeFileSync(filePath, updatedContent);
};

// Convert a filename to camelCase
const toPascalCase = (str) => {
  return str
    .replace(/[-_\s](.)/g, (_, p1) => p1.toUpperCase())
    .replace(/(^[a-z])/, (_, p1) => p1.toUpperCase());
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
      const filePath = path.join(svgDir, file);

      // Replace fill colors in SVG file
      replaceColorInSvg(filePath);

      const componentName = `${toPascalCase(path.basename(file, ".svg"))}Icon`;
      const componentFileName = `${componentName}.tsx`;

      // Create the React component string
      const componentString = `import React, { SVGProps } from 'react';\nimport { ReactComponent as Icon } from '../assets/${file}';\n\nconst ${componentName}: React.FC<SVGProps<SVGSVGElement>> = (props) => {\n  return <Icon {...props} />;\n};\n\nexport { ${componentName} };\n`;

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
            console.log(
              `Successfully generated ${componentName} ${path.basename(
                file,
                ".svg"
              )}`
            );
          }
        }
      );
    }
  });
});
