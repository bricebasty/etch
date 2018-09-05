// Select container id, data to variable
const container = document.querySelector('#container');

// Select button, data to variable
const button = document.querySelector('button');

// Select all gridElement class, data to variable
const gridElement = Array.from(document.querySelectorAll('.gridElement'));

// Loop to create divs
for (let i = 0; i <= 15; i += 1) {
  container.innerHTML += "<div class='gridElement'>Test</div>";
}

// Add blackBackground to each gridElement
function addBlackBackground() {
  gridElement.forEach((gridElement) => {
    gridElement.addEventListener('mouseover', () => {
      gridElement.classList.add('blackBackground');
    });
  });
}

function removeBlackBackground() {
  gridElement.forEach((gridElement) => {
    gridElement.classList.remove('blackBackground');
  });
}

function askHowManySquares() {
  const squaresNumber = window.prompt('How many squares per side for next grid?');
  return squaresNumber;
}

function createGrid(squaresNumber) {
  container.style.grid = `repeat(${squaresNumber}, 1fr) / repeat(${squaresNumber}, 1fr)`;
}

function clickButton() {
  button.addEventListener('click', () => {
    removeBlackBackground();
    const squares = askHowManySquares();
    createGrid(squares);
  });
}

addBlackBackground();
clickButton();
