const mainContainer_div = document.querySelector('.mainContainer');
let sliderValue = document.getElementById('slider').value;

function calculateSize(sliderValue) {
    const mainContainerHeight = 600;
    const mainContainerWidth = 600;
    heightOfDiv = (mainContainerHeight / sliderValue) - 2;
    widthOfDiv = (mainContainerWidth / sliderValue) - 2;
}

calculateSize(sliderValue);

function createDivs(numberOfDivs) {
    numberOfDivs = numberOfDivs * numberOfDivs;
    for (let i = 0; i < numberOfDivs; i++) {
        const divs = document.createElement('div');
        mainContainer_div.appendChild(divs);
        divs.style.cssText = `height: ${heightOfDiv}px; width: ${widthOfDiv}px; border-width: 1px; background: white; display: flex; border-color: grey; border-style: solid; flex-wrap: nowrap`;
    }
}

createDivs(sliderValue);