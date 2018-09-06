// Select container id, data to variable
const container = document.querySelector('#container');

// Select button, data to variable
const button = document.querySelector('button');

// Select all gridElement class, data to variable
const gridElement = Array.from(document.querySelectorAll('.gridElement'));

// Loop to create divs
for (let i = 0; i < 16; i += 1) {
  container.innerHTML += "<div class='gridElement'></div>";
}

// Add blackBackground to each gridElement
function addBlackBackground() {
  gridElement.forEach((gridElement) => {
    gridElement.addEventListener('mouseover', () => {
      gridElement.classList.add('blackBackground');
    });
  });
}

// Remove blackBackgroudn to each gridElement
function removeBlackBackground() {
  gridElement.forEach((gridElement) => {
    gridElement.classList.remove('blackBackground');
  });
}

// Ask how many squares you want for the next grid
function askHowManySquares() {
  const squaresNumber = window.prompt('How many squares per side for next grid?');
  return squaresNumber;
}

// Remove grid elements from HTML
function removeGridElement(squaresNumber) {
  Array.from(gridElement).forEach(() => {
    for (let i = 0; i < squaresNumber; i += 1) {
      container.removeChild(gridElement);
    }
  });
}

// Add grid elements to HTML
function addGridElements(squaresNumber) {
  for (let i = 0; i < squaresNumber * squaresNumber; i += 1) {
    container.innerHTML += "<div class='gridElement'></div>";
  }
}

// Make grid Responsive
function makeGridResponsive(squaresNumber) {
  container.style.grid = `repeat(${squaresNumber}, 1fr) / repeat(${squaresNumber}, 1fr)`;
}

// Create the grid
function createGrid(squaresNumber) {
  removeGridElement(squaresNumber);
  addGridElements(squaresNumber);
  makeGridResponsive(squaresNumber);
}

// Actions when button is clicked
function clickButton() {
  button.addEventListener('click', () => {
    removeBlackBackground();
    const squares = askHowManySquares();
    createGrid(squares);
  });
}

// Call functions
addBlackBackground();
clickButton();
