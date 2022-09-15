const mainContainer_div = document.querySelector('.mainContainer');

function createDivs(numberOfDivs) {
    let totalNumberOfDivs = numberOfDivs * numberOfDivs;
    heightOfDiv = (600 / numberOfDivs) - 2;
    widthOfDiv = (600 / numberOfDivs) - 2;

    let board = document.querySelector('.mainContainer');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    for (let i = 0; i < totalNumberOfDivs; i++) {
        const divs = document.createElement('div');
        divs.classList.add('littleDivs');
        mainContainer_div.appendChild(divs);
        divs.style.cssText = `height: ${heightOfDiv}px; width: ${widthOfDiv}px; border-width: 1px; background: white; display: flex; border-color: grey; border-style: solid; flex-wrap: nowrap`;
        
    }
}

createDivs(16);

function changeSize(input) {
    createDivs(input);
}



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
