const mainContainer_div = document.querySelector('.mainContainer');
let sliderValue = 16 // document.getElementById('slider').value;


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
        divs.classList.add('littleDivs');
        mainContainer_div.appendChild(divs);
        divs.style.cssText = `height: ${heightOfDiv}px; width: ${widthOfDiv}px; border-width: 1px; background: white; display: flex; border-color: grey; border-style: solid; flex-wrap: nowrap`;
    }
}

createDivs(sliderValue);

// function changeColorHover() {
//     const divs_div = document.querySelector('.littleDivs');
//     divs_div.addEventListener('mouseenter', () => {
//         divs_div.style.background = 'black';
//     });
// }

// changeColorHover();




// const divs_div = document.getElementsByClassName('littleDivs');
// divs_div.addEventListener("mouseenter", () => divs_div.style.background = "black");

// divs_div.addEventListener("mouseleave", () => console.log('chau'));

// function mouseOver() {
//     divs_div.style.cssText = "background-color: black";
// }

// function mouseOut() {
//     divs_div.style.cssText = "background: black";
// }