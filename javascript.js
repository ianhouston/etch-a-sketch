const gridChangeButton = document.querySelector('button');

let grid2dArray = [];

const gridContainerSpacePx = 8;
const gridContainer = document.createElement('div');
gridContainer.setAttribute('style', `background-color: lightgray; display: flex; gap: ${gridContainerSpacePx}px; margin: ${gridContainerSpacePx}px; flex-wrap: wrap;`)
document.querySelector('body').appendChild(gridContainer);

//creates a square grid based on the constant BASE_SIZE
// the grid would be BASE_SIZE * BASE_SIZE
const BASE_SIZE = 4;
for (let i = 0; i < BASE_SIZE; i++) {
    grid2dArray.push([]);
    for (let j = 0; j < BASE_SIZE; j++) {
        grid2dArray[i].push(document.createElement('div'));
        grid2dArray[i][j].setAttribute('style', `background-color: darkgray; width: ${(window.innerWidth/BASE_SIZE)-(gridContainerSpacePx*BASE_SIZE)}px; height: ${(window.innerHeight/BASE_SIZE)-(gridContainerSpacePx*BASE_SIZE)}px; flex-basis: 24%`);
        gridContainer.appendChild(grid2dArray[i][j]);
    }
}

const clearGrid = () => {
    grid2dArray = [];
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
}

const changeGrid = (newSize) => {
    clearGrid();
    for (let i = 0; i < newSize; i++) {
        grid2dArray.push([]);
        for (let j = 0; j < newSize; j++) {
            grid2dArray[i].push(document.createElement('div'));
            grid2dArray[i][j].setAttribute('style', `background-color: darkgray; width: ${(window.innerWidth/newSize)-(gridContainerSpacePx*newSize)}px; height: ${(window.innerHeight/newSize)-(gridContainerSpacePx*newSize)}px; flex-basis: 24%`);
            gridContainer.appendChild(grid2dArray[i][j]);
        }
    }
}

// Adding an event for the grid change button

const promptNewGridSize = () => {
    changeGrid(parseInt(prompt("What length do you want your new square grid to have?")));
}

gridChangeButton.addEventListener('click', promptNewGridSize);