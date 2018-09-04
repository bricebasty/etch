const container = document.querySelector('#container');

for (let i = 0; i <= 15; i++) {
	container.innerHTML += '<div class="gridElement">Test</div>';
}

//Return all the grid elements into a variable
const gridElement = document.querySelectorAll('.gridElement');

//Add blackBackground to each gridElement
Array.from(gridElement).forEach(gridElement => {
    gridElement.addEventListener('mouseover', function(event) {
		gridElement.classList.add('blackBackground');
    });
});
