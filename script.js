// Variable to store the generated combination
let combination = '';

// Function to add a strike to the combination
function addToCombination(strike) {
    combination += `${strike}, `;
    updateCombinationOutput();
}

// Function to update the displayed combination
function updateCombinationOutput() {
    const combinationOutput = document.getElementById('combinationOutput');
    combinationOutput.textContent = combination.trim();
}

// Function to save the combination
function saveCombination() {
    if (combination !== '') {
        const savedCombinations = document.getElementById('savedCombinations');
        const newCombination = document.createElement('p');
        newCombination.textContent = combination.trim();
        savedCombinations.appendChild(newCombination);

        // Clear the current combination
        clearCombination();
    }
}

// Function to clear the combination
function clearCombination() {
    combination = '';
    updateCombinationOutput();
}

// Function to export saved combinations
function exportCombinations() {
    const savedCombinations = document.getElementById('savedCombinations');
    const combinationsText = Array.from(savedCombinations.children)
        .map(combination => combination.textContent)
        .join('\n');

    // Create a Blob and download the text file
    const blob = new Blob([combinationsText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'saved_combinations.txt';
    link.click();
}

// Function to select a punch
function selectPunch(punch) {
    addToCombination(punch);
}

// Functions to select kicks
function selectKick(kick) {
    addToCombination(kick);
}

// Functions to select knees
function selectKnee(knee) {
    addToCombination(knee);
}

// Functions to select elbows
function selectElbow(elbow) {
    addToCombination(elbow);
}

// ... your existing code ...

// script.js

let savedCombos = [];

// ... (existing code) ...

function exportCombinationsText() {
    const savedCombinationsElement = document.getElementById('savedCombinations');
    const combinationsText = Array.from(savedCombinationsElement.children)
      .map(combinationElement => combinationElement.textContent)
      .join('\n');
    const blob = new Blob([combinationsText], { type: 'text/plain' });
  
    // Create a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'saved_combinations.txt';
    link.click();
    URL.revokeObjectURL(link.href);
  }

function exportCombinationsImage() {
  html2canvas(document.getElementById('savedCombinations')).then(function (canvas) {
    const dataURL = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'saved_combinations.png';
    link.click();
  });
}

function exportCombination(type) {
  if (type === 'text') {
    exportCombinationsText();
  } else if (type === 'image') {
    exportCombinationsImage();
  } else {
    alert('Invalid export type.');
  }
}

// ... (existing code) ...


// Function to handle saving as text (you can customize this function)
function saveTextCombination() {
    var textCombination = document.getElementById('combinationOutput').innerText;

    // Here, you can implement your logic to save the text combination as needed.
    // For simplicity, let's just display an alert with the text combination.
    alert('Text Combination:\n' + textCombination);
}


