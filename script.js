const mainContainer_div = document.querySelector('.mainContainer');
const reset_btn = document.querySelector('.reset');

function createDivs(numberOfDivs) {
    heightOfDiv = (600 / numberOfDivs) - 2;
    widthOfDiv = (600 / numberOfDivs) - 2;

    let board = document.querySelector('.mainContainer');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    
    
    for (let i = 0; i < numberOfDivs * numberOfDivs; i++) {
        const divs = document.createElement('div');
        divs.classList.add('littleDivs');
        divs.addEventListener('mouseover', () => {
            divs.style.background = 'black';
        })
        mainContainer_div.appendChild(divs);
        divs.style.cssText = `height: ${heightOfDiv}px; width: ${widthOfDiv}px; border-width: 1px; background: white; display: flex; border-color: grey; border-style: solid; flex-wrap: nowrap`;
    }
}

createDivs(36);

let currentSize = 36;

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        createDivs(input);
    } else {
        console.log('error')
    }
    currentSize = input;
}

function resetGame() {
    createDivs(currentSize);
}