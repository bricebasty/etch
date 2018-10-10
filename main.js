// Select container id, data to variable
const container = document.querySelector('#container');

// Loop to create divs
for (let i = 0; i < 100; i += 1) {
  container.innerHTML += "<div class='gridElement'></div>";
}

// Select all gridElement class, data to variable
let gridElement = Array.from(document.querySelectorAll('.gridElement'));

// Select button, data to variable
const button = document.querySelector('button');

function addBlackBackground(element) {
  element.classList.add('blackBackground');
  return element;
}

// Add blackBackground to each gridElement OK
function listenToGrid() {
  gridElement.forEach(element => {
    element.addEventListener('mouseover', event => addBlackBackground(event.target), false);
  });
}

// Remove blackBackgroudn to each gridElement OK
function removeBlackBackground() {
  gridElement.forEach(element => {
    element.classList.remove('blackBackground');
  });
}

// Ask how many squares you want for the next grid OK
function askHowManySquares() {
  const squaresNumber = window.prompt('How many squares per side for next grid? (max 30 or bug)');
  return squaresNumber;
}

// Remove grid elements from HTML NOP
function removeGridElement() {
  gridElement.forEach(e => container.removeChild(e));
}

// Add grid elements to HTML NOP
function addGridElements(squaresNumber) {
  const sqSquaresNumber = squaresNumber * squaresNumber;
  for (let i = 0; i < sqSquaresNumber; i += 1) {
    container.innerHTML += "<div class='gridElement'></div>";
  }
}

// Make grid Responsive
function makeGridResponsive(squaresNumber) {
  container.style.grid = `repeat(${squaresNumber}, 1fr) / repeat(${squaresNumber}, 1fr)`;
}

// Create the grid
function createGrid(squaresNumber) {
  removeGridElement();
  addGridElements(squaresNumber);
  gridElement = Array.from(document.querySelectorAll('.gridElement'));
  makeGridResponsive(squaresNumber);
}

// Actions when button is clicked
function listentoButton() {
  button.addEventListener('click', () => {
    removeBlackBackground();
    const squares = askHowManySquares();
    createGrid(squares);
    listenToGrid();
  });
}

// Call functions
listenToGrid();
listentoButton();
