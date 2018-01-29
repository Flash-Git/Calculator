const container = document.querySelector('#innerContainer');

createNums();

function operate(op){
	switch(op){
		case "+":
			console.log("+");
			break;
		case "-":
			break;
		case "x":
		case "*":
			break;
		case "/":
			break;
		case "=":
			break;
		default:
			console.log("DEFAULT SWITCH");
	}
}


function createNums(){
	for (var i = 1; i < 10; i++) {
		const cell = document.createElement('div');
		cell.innerHTML = i;
		cell.classList.add('cell');
		container.appendChild(cell);
	}
	const cell = document.createElement('div');
	cell.innerHTML = 0;
	cell.classList.add('cell');
	cell.width = "154px";
	container.appendChild(cell);
}



/*



const container = document.querySelector('#container');

let cellColor = "black";

createGrid();

function createNumGrid(){
	deleteGrid();
    cellNumber = prompt("Cells per Line", "16");
    var cellSize = Math.round(416/cellNumber);

	for (i=0; i<cellNumber*cellNumber; i++){
		const cell = document.createElement('div');
		cell.style.width = (cellSize+'px');
		cell.style.height = (cellSize+'px');

		cell.classList.add('cell');
		cell.addEventListener('mouseover', function (e){
			e.target.style.backgroundColor = cellColor;
		});
		container.appendChild(cell);
	}
}

function deleteGrid(){
	for(i = 0; i<cellNumber*cellNumber; i++){
		while (container.firstChild){
			container.removeChild(container.firstChild);
		}
	}
}
*/