/**
 Zendesk Documentation: https://developer.zendesk.com/documentation/marketplace/building-a-marketplace-app/create-content/
 
 To run: node scripts/updateTranslations.js

 To validate:
 - Copy output here and hit "Unescape": https://jsonformatter.org/json-unescape
 - Then copy that output here: https://markdownlivepreview.com/
 */

const fs = require("fs");
const path = require("path");

const jsonPath = path.resolve("app/translations/en.json");
const longDescPath = path.resolve("content/long_description.md");
const installInstrPath = path.resolve("content/installation_instructions.md");
const MAX_LENGTH = 3000;

function formatMarkdown(filePath) {
  const raw = fs.readFileSync(filePath, "utf-8");
  return raw
    .replace(/\r\n/g, "\n")
    .replace(/\n{2,}/g, " \n\n")
    .replace(/\n/g, " \n")
    .trim();
}

function validateLength(fieldName, content) {
  const length = content.length;
  console.log(`${fieldName} length: ${length}`);

  if (length > MAX_LENGTH) {
    console.error(
      `❌ ${fieldName} exceeds ${MAX_LENGTH} characters. Current length: ${length}`
    );
    process.exit(1);
  }
}

const longDescription = formatMarkdown(longDescPath);
const installationInstructions = formatMarkdown(installInstrPath);

validateLength("long_description", longDescription);
validateLength("installation_instructions", installationInstructions);

const json = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

json.app.long_description = longDescription;
json.app.installation_instructions = installationInstructions;

fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));
console.log("en.json updated successfully.");
