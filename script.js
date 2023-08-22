let isMouseDown = false;
document.body.onmousedown = () => {isMouseDown = true};
document.body.onmouseup = () => {isMouseDown = false};

function createGrid(size) {

    const grid = document.querySelector('.container')

    for(let i = 0; i < size*size; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', colorCell);
        cell.addEventListener('mousedown', colorCell);
        grid.appendChild(cell);
    }
    grid.style.cssText = `grid-template-columns: repeat(${size}, 1fr); 
                          grid-template-rows: repeat(${size}, 1fr)`;
}

function colorCell(e){
    if(e.type == 'mouseover' && isMouseDown) {
        this.style.backgroundColor = 'black';
        this.style.border = 'none';
    }
}

createGrid(100);