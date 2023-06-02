const main = document.querySelector('main');


const makeDivs = (numDivs) =>{
    for (let i = 0; i < numDivs; i++){
        const square = document.createElement('DIV'); 
        square.classList.add('square');
        main.append(square);
    }
}

makeDivs(256);

