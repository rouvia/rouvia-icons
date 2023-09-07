const fs = require("fs");
const path = require("path");

// The directory containing your React components
const componentsDir = "./components";

// Directory where the index.ts file will be generated
const indexDir = "./";

// Initialize the content of the index file
let indexContent = "";

// Read the list of files in the components directory
fs.readdir(path.join(__dirname, componentsDir), (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach((file) => {
    if (path.extname(file) === ".tsx") {
      const componentName = path.basename(file, ".tsx");
      indexContent += `export { ${componentName} } from './components/${componentName}';\n`;
    }
  });

  // Write the index file in the src directory
  fs.writeFile(
    path.join(__dirname, "..", "index.ts"),
    indexContent,
    "utf8",
    (err) => {
      if (err) {
        console.error("Error while writing index file", err);
      } else {
        console.log("Successfully generated index.ts");
      }
    }
  );
});
