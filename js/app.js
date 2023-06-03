const main = document.querySelector('main');
const btn = document.querySelector('.btn');
const clearBtn = document.querySelector('#clear');


const changeColor = (e) =>{
    if (document.getElementById('rainbow').checked){
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${red} , ${green} , ${blue})`;
    }else {
        e.target.style.backgroundColor = 'black';
    }
    
}

// const changeColorRainbow = (e) => {
//     const red = Math.floor(Math.random() * 255);
//     const green = Math.floor(Math.random() * 255);
//     const blue = Math.floor(Math.random() * 255);
//     e.target.style.backgroundColor = `rgb(${red} , ${green} , ${blue})`;;
// };


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

btn.addEventListener('click', function(e){
    e.preventDefault();
    const parent = e.target.closest('label');
    const input = parent.querySelector('input');
    const inputValue = input.value;
    console.log(inputValue);
    
    removeBoxes();
    makeBoxes(inputValue);
   
});

clearBtn.addEventListener('click', function(e){
    removeBoxes();
})


