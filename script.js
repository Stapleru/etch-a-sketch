let isMouseDown = false;
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

    this.style.backgroundColor = 'black';
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

createGrid(16);