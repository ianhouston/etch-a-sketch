const gridChangeButton = document.querySelector('button');

let grid2dArray = [];

const BASE_SIZE = 16;
const titleBannerHeight = 80;
const gridMarginPx = 2;
const gridContainer = document.createElement('div');
gridContainer.setAttribute('style', `
                            background-color: lightgray; 
                            display: flex; 
                            flex-wrap: wrap; 
                            justify-content: center;
                            margin: ${gridMarginPx}px;
                            margin-bottom: 0;
                            max-width: ${(((window.innerHeight/BASE_SIZE)-(titleBannerHeight/BASE_SIZE))*BASE_SIZE)}px;`)
document.querySelector('body').appendChild(gridContainer);

//creates a square grid based on the constant BASE_SIZE
// the grid would be BASE_SIZE * BASE_SIZE
for (let i = 0; i < BASE_SIZE; i++) {
    grid2dArray.push([]);
    for (let j = 0; j < BASE_SIZE; j++) {
        grid2dArray[i].push(document.createElement('div'));
        grid2dArray[i][j].setAttribute('style', `background-color: darkgray; 
                                        width: ${(window.innerHeight/BASE_SIZE)-(titleBannerHeight/BASE_SIZE)}px; 
                                        height: ${(window.innerHeight/BASE_SIZE)-(titleBannerHeight/BASE_SIZE)}px;`);
        gridContainer.appendChild(grid2dArray[i][j]);
    }
}

// adding events to the grid members
const giveGridEvents = () => {
    grid2dArray.flat().forEach((gridMember) => {
        gridMember.addEventListener('mouseover', function (event) {
            event.target.style.background = 'black';
        });
    });
}

giveGridEvents();

// clears grid array and grid container
const clearGrid = () => {
    grid2dArray = [];
    while (gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
}

// makes a new grid according to the given integer size
function changeGrid(newSize) {
    if (isNaN(newSize)) {
        alert("That is not a valid length. Please enter an integer when the next prompt appears.");
        promptNewGridSize();
    }
    else if (newSize > 100) {
        alert("100 is the maximum length for the grid. Please enter a smaller number when the next prompt appears.")
        promptNewGridSize();
    }
    else {
        clearGrid();
        gridContainer.style.maxWidth = `${(((window.innerHeight/newSize)-(titleBannerHeight/newSize))*newSize)}px`;
        for (let i = 0; i < newSize; i++) {
            grid2dArray.push([]);
            for (let j = 0; j < newSize; j++) {
                grid2dArray[i].push(document.createElement('div'));
                grid2dArray[i][j].setAttribute('style', `background-color: darkgray; 
                                                width: ${(window.innerHeight/newSize)-(titleBannerHeight/newSize)}px; 
                                                height: ${(window.innerHeight/newSize)-(titleBannerHeight/newSize)}px; `);
                gridContainer.appendChild(grid2dArray[i][j]);
            }
        }
        giveGridEvents();
    }
}

// Adding an event for the grid change button
const promptNewGridSize = () => {
    changeGrid(parseInt(prompt("What length do you want your new square grid to have?")));
}

gridChangeButton.addEventListener('click', promptNewGridSize);