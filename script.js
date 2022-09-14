const mainContainer_div = document.querySelector('.mainContainer');

function createDivs(numberOfDivs) {
    for (let i = 0; i < numberOfDivs; i++) {
        const divs = document.createElement('div');
        mainContainer_div.appendChild(divs);
        divs.style.cssText = 'height: 100px; width: 100px; background: black; display: flex; margin: 10px; flex-wrap: wrap;';
    }
}

createDivs(16);