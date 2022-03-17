const grid = document.querySelector('.grid');
const clear = document.querySelector(".clear-btn");

createGrid();

function createGrid() {

    clearGrid();

    let gridSize = prompt("Give a grid size. For example 16. (that give 16x16");
    let squareSize = 600 / gridSize;
    grid.style.gridTemplateRows = `repeat(${gridSize}, ${squareSize}px)`;
    grid.style.gridTemplateColumns = `repeat(${gridSize}, ${squareSize}px)`;

    for (let r = 1; r <= gridSize; r++) {
        for (let c = 1; c <= gridSize; c++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('id', `${r}x${c}`);
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            grid.appendChild(square);
        }
    }

    for (square of document.querySelectorAll('.square')) {
        square.addEventListener('mouseover', changeColor)
    }
    
    function changeColor(e) {
        e.target.style.backgroundColor = "green";
    }

}




clear.addEventListener("click", () => {
    for (square of document.querySelectorAll('.square')) {
        square.style.backgroundColor = "";
    }
    createGrid();
});



function clearGrid(){
    if (grid.firstChild) {
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
    } else return;
}