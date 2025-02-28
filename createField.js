// Function to create label + textbox
export function createField(fieldName) {
  let fieldContainer = document.createElement("div");

  let label = document.createElement("label");
  label.textContent = fieldName.replace(/([a-z])([A-Z])/g, "$1 $2"); // Add space for readability

  let textbox = document.createElement("input");
  textbox.type = "text";
  textbox.name = fieldName;

  fieldContainer.appendChild(label);
  fieldContainer.appendChild(textbox);

  return fieldContainer;
}
