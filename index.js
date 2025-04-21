// Function to change the background color when the button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue";
}

// Function to reset the background color when the reset button is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = "white";
}

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyDisplay = document.querySelector("#keyPressDisplay");
  keyDisplay.textContent = `You pressed: ${event.key}`;
}

// Function to display user input in real-time
function displayUserInput() {
  const input = document.querySelector("#textInput");
  const output = document.querySelector("#textInputDisplay");
  output.textContent = `You typed: ${input.value}`;
}

// Attach event listeners
document
  .getElementById("changeColorButton")
  .addEventListener("click", changeBackgroundColor);  // Button click to change background

document
  .getElementById("resetColorButton")
  .addEventListener("dblclick", resetBackgroundColor);  // Double-click to reset background

document.addEventListener("keydown", displayKeyPress);  // Key press to display pressed key

document
  .getElementById("textInput")
  .addEventListener("input", displayUserInput);  // Input field to show real-time user input
