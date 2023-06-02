const main = document.querySelector('main');
const changeGridSize = document.querySelector('#change-squares')

function changeColor(e){
    e.target.style.backgroundColor = "black";
}

const makeBoxes = (boxesPerSide) =>{
    numDivs = boxesPerSide * boxesPerSide
    for (let i = 0; i < numDivs; i++){
        main.style.gridTemplateRows = `repeat(${boxesPerSide}, 1fr)`;
        main.style.gridTemplateColumns = `repeat(${boxesPerSide}, 1fr)`;
        const square = document.createElement('DIV'); 
        square.classList.add('square');
        square.addEventListener('mouseover', changeColor);
        main.append(square);
    }
}

const removeBoxes = () =>{
    main.innerHTML = "";
}

makeBoxes(16);

changeGridSize.addEventListener('click', function(e){
    let size = prompt('How many squares per side?');
    size = Number(size);

    if(size < 100){
        removeBoxes();
        makeBoxes(size);
    } else{
        alert("You need to pick a number less than 100");
    };

});


