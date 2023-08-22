function createGrid(size) {

    const grid = document.querySelector('.container')

    for(let i = 0; i < size*size; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
    grid.style.cssText = `grid-template-columns: repeat(${size}, 1fr); 
                          grid-template-rows: repeat(${size}, 1fr)`;
}

createGrid(16);