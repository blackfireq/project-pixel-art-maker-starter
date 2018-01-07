// Select color input
let gridColor = document.getElementById("colorPicker");

// Select size input
let gridWidth = document.getElementById("input_width");
let gridHeight = document.getElementById("input_height");

//get a link to the table being used as a canvas
const tableCanvas = document.getElementById("pixel_canvas");

//get a link to the color picker
let colorPicker = document.getElementById("colorPicker");

// When size is submitted by the user, call makeGrid()
document.querySelector("input[type='submit']").addEventListener('click', function(event){
	// stop form from reloading the page
	event.preventDefault();

	//call makeGrid
	makeGrid();
});

// give the ability to color the table cell from the color chosen from the color picker
tableCanvas.addEventListener('click', function (event){
	console.log(event.target.nodeName);
	if(event.target.nodeName === 'TD'){
		let currentCell = event.target.style.backgroundColor = colorPicker.value;
	}
});

function makeGrid() {
	//check if pixel_canvas is empty, if not remove child
	while (tableCanvas.firstChild){
		tableCanvas.removeChild(tableCanvas.firstChild);
	}

	//create container
	const fragment = document.createDocumentFragment();

	//get the current values of the grid
	const totalTableRows = gridHeight.value;
	const totalTablecolumns = gridWidth.value;

	for (let a = 0; a < totalTableRows; a++) {	

		//create table row
		const tableRow = document.createElement("tr");

		//insert table columns for that row
		for (let i = totalTablecolumns- 1; i >= 0; i--) {

			//create table column
			const tableColumn = document.createElement("td");
			
			//append coulmn to row
			tableRow.appendChild(tableColumn);
		}

		// append row to table body
		fragment.appendChild(tableRow);
	}

	tableCanvas.appendChild(fragment);
}