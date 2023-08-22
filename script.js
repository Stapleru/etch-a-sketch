let isMouseDown = false;
let currentMode = "black";
document.body.onmousedown = () => {isMouseDown = true};
document.body.onmouseup = () => {isMouseDown = false};

const grid = document.querySelector('.container')

function createGrid(size) {
    for(let i = 0; i < size*size; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseenter', colorCell);
        cell.addEventListener('mousedown', colorCell, true);
        grid.appendChild(cell);
    }
    grid.style.cssText = `grid-template-columns: repeat(${size}, 1fr); 
                          grid-template-rows: repeat(${size}, 1fr)`;
}

function colorCell(e){
    if(e.type == 'mouseenter' && !isMouseDown) return;
    if(currentMode == 'black')
        this.style.backgroundColor = 'black';
    else 
        this.style.backgroundColor = getRandomColor();
    this.style.border = 'none';
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function changeGrid(){
    let size = parseInt(prompt('Enter size of grid (e.g. 64 will create 64x64 grid)', '16'));
    if(size > 100)
        alert('Please enter size that is less than 100');
    else if(size < 0)
        alert('Please enter positive number');
    else if(!(Number.isInteger(size)))
        alert('Please enter integer');
    else{
        removeAllChildNodes(grid);
        createGrid(size);
    } 
}

function eraseGrid(){
    let cells = document.querySelectorAll('.cell');
    cells.forEach((element) => {
        element.style.cssText = "border: 1px solid #e2ddddea; background-color: white; ";
    });
}

function toggleMode(button){
    if(button.value == "Black"){
        button.value = "Rainbow";
        currentMode = "rainbow"
    } else {
        button.value = "Black";
        currentMode = "black";
    }
}

function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

createGrid(16);