const gridChangeButton = document.querySelector('button');

let grid2dArray = [];

const BASE_SIZE = 4;
const titleBannerHeight = 80;
const gridContainerSpacePx = 8;
const gridContainer = document.createElement('div');
gridContainer.setAttribute('style', `background-color: lightgray; display: flex; flex-wrap: wrap; justify-content: center;
                            gap: ${gridContainerSpacePx}px; margin: ${gridContainerSpacePx}px;
                            max-width: ${(((window.innerHeight/BASE_SIZE)-(gridContainerSpacePx*(BASE_SIZE+1))-(titleBannerHeight/BASE_SIZE))*BASE_SIZE)+(gridContainerSpacePx*(BASE_SIZE+1))}px;`)
document.querySelector('body').appendChild(gridContainer);

//creates a square grid based on the constant BASE_SIZE
// the grid would be BASE_SIZE * BASE_SIZE
for (let i = 0; i < BASE_SIZE; i++) {
    grid2dArray.push([]);
    for (let j = 0; j < BASE_SIZE; j++) {
        grid2dArray[i].push(document.createElement('div'));
        grid2dArray[i][j].setAttribute('style', `background-color: darkgray; 
                                        width: ${(window.innerHeight/BASE_SIZE)-(gridContainerSpacePx*(BASE_SIZE+1))-(titleBannerHeight/BASE_SIZE)}px; 
                                        height: ${(window.innerHeight/BASE_SIZE)-(gridContainerSpacePx*(BASE_SIZE+1))-(titleBannerHeight/BASE_SIZE)}px;
                                        flex-grow: 0;`);
        gridContainer.appendChild(grid2dArray[i][j]);
    }
}

//makes a grid member darken its color
const darkenGridMember = (event) => {
    //either loop through grid2dArray to find === to event.currentTarget
    // or find a way to mutate the target div through the event object itself
} 

//clears grid array and grid container
const clearGrid = () => {
    grid2dArray = [];
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
}

//makes a new grid according to the given integer size
const changeGrid = (newSize) => {
    clearGrid();
    gridContainer.style.maxWidth = `${(((window.innerHeight/newSize)-(gridContainerSpacePx*(newSize+1))-(titleBannerHeight/newSize))*newSize)+(gridContainerSpacePx*(newSize+1))}px`;
    for (let i = 0; i < newSize; i++) {
        grid2dArray.push([]);
        for (let j = 0; j < newSize; j++) {
            grid2dArray[i].push(document.createElement('div'));
            grid2dArray[i][j].setAttribute('style', `background-color: darkgray; 
                                            width: ${(window.innerHeight/newSize)-(gridContainerSpacePx*(newSize+1))-(titleBannerHeight/newSize)}px; 
                                            height: ${(window.innerHeight/newSize)-(gridContainerSpacePx*(newSize+1))-(titleBannerHeight/newSize)}px; 
                                            flex-grow: 0;`);
            gridContainer.appendChild(grid2dArray[i][j]);
        }
    }
}

// Adding an event for the grid change button
const promptNewGridSize = () => {
    changeGrid(parseInt(prompt("What length do you want your new square grid to have?")));
}

gridChangeButton.addEventListener('click', promptNewGridSize);