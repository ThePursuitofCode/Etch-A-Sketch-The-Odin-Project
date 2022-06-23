const slider = document.querySelector('#slider');
const sliderOutput = document.querySelector('#sliderOutput');

const mainGrid = document.querySelector('#grid');


// buttons
const blackBtn = document.querySelector('#blackBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const eraserBtn = document.querySelector('#eraser');

let currentSize = 5

sliderOutput.textContent = currentSize

slider.onchange = (e) => {
    let gridDivs = document.querySelectorAll('.gridDiv')
    currentSize = e.target.value
    sliderOutput.textContent = currentSize

    gridDivs.forEach(div => {div.remove();})

    mainGrid.style.cssText += `grid-template: repeat(${currentSize}, 1fr) / repeat(${currentSize}, 1fr)`;
    for (let i = 0; i < (currentSize * currentSize); i++) {
        let gridDiv = document.createElement('div')
        gridDiv.className = 'gridDiv';
        mainGrid.appendChild(gridDiv); 
      }
}    

blackBtn.addEventListener('click', () => {
    mainGrid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black'
        e.target.style.border = 'none'
    })
})

function randomColor(){
    let r = Math.floor(Math.random() * 255) + 1
    let g = Math.floor(Math.random() * 255) + 1
    let b = Math.floor(Math.random() * 255) + 1
    let rgb = `rgb(${r},${g},${b})`
    return rgb
}

rainbowBtn.addEventListener('click', () => {
    mainGrid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = randomColor()
        e.target.style.border = 'none'
    })
})


eraserBtn.addEventListener('click', () => {
    mainGrid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'white'
        e.target.style.border = '#edede98e solid 1px';
    })
})