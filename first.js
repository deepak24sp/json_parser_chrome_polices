import { jsonString } from "./data.js";
import { createField } from "./createField.js";

// Components
let title = document.createElement("h2");
let container = document.createElement("div");

// Parse JSON
const parsedData = JSON.parse(jsonString);

// Set page title
title.textContent = parsedData.policyDescription;

// Get the first section element
let sectionadd = document.getElementsByClassName("section")[0];

if (sectionadd) {
  sectionadd.appendChild(title);
} else {
  console.error("No element with class 'section' found.");
}




// Recursive function to process fields and nested fields
function processFields(fieldData, parentContainer) {
  fieldData.forEach((field) => {
    if (field.nestedFieldDescriptions) {
      // Create a container for nested fields
      let nestedContainer = document.createElement("div");
      nestedContainer.style.border = "1px solid #ddd";
      nestedContainer.style.padding = "10px";
      nestedContainer.style.margin = "10px 0";

      let nestedTitle = document.createElement("h3");
      nestedTitle.textContent = field.field.replace(/([a-z])([A-Z])/g, "$1 $2"); // Field name as title

      nestedContainer.appendChild(nestedTitle);

      // Recursively process nested fields
      processFields(field.nestedFieldDescriptions, nestedContainer);

      parentContainer.appendChild(nestedContainer);
    } else {
      // Create a normal label + textbox
      let fieldContainer = createField(field.field);
      parentContainer.appendChild(fieldContainer);
    }
  });
}

// Process additionalTargetKeyNames
if (parsedData.additionalTargetKeyNames) {
  let keyName = parsedData.additionalTargetKeyNames[0].key;
  container.appendChild(createField(keyName));
}

// Process fieldDescriptions
if (parsedData.fieldDescriptions) {
  processFields(parsedData.fieldDescriptions, container);
}

// Append to section
sectionadd.appendChild(container);
