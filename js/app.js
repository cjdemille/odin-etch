const main = document.querySelector('main');

function changeColor(e){
    e.target.style.backgroundColor = "black";
}

const makeDivs = (numDivs) =>{
    for (let i = 0; i < numDivs; i++){
        const square = document.createElement('DIV'); 
        square.classList.add('square');
        square.addEventListener('mouseover', changeColor);
        main.append(square);
    }
}

makeDivs(256);



