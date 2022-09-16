const mainContainer_div = document.querySelector('.mainContainer');
const reset_btn = document.querySelector('.reset');
let color_btn = document.querySelector('.changeColor');
let clickText = document.querySelector('.drawText');
let currentColor = '#000000';
let click = true;


function createDivs(numberOfDivs) {
    heightOfDiv = (600 / numberOfDivs) - 2;
    widthOfDiv = (600 / numberOfDivs) - 2;

    let board = document.querySelector('.mainContainer');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    
    for (let i = 0; i < numberOfDivs * numberOfDivs; i++) {
        const divs = document.createElement('div');
        divs.classList.add('littleDivs');
        divs.addEventListener('mouseover', colorDiv);
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

color_btn.addEventListener('change', () => {
    currentColor = color_btn.value;
})

function colorDiv() {
    if (click) {
    this.style.background = currentColor;
    }
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON'){
        click = !click;
        if (click) {
            clickText.textContent = `Drawing: True`;
            clickText.style.cssText = 'color: green';
        } else {
            clickText.textContent = `Drawing: False`;
            clickText.style.cssText = 'color: red';
        }
    }
})