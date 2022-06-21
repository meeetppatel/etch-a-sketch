const grid = document.getElementById("grid");
const size = 16;
const color = "black";
const mode = "color";

let currentSize = size;
let currentColor = color;
let currentMode = mode;

const colorPicker = document.getElementById("colorPicker");
const slider = document.getElementById("slider");
const slidervalue = document.getElementById("slidervalue");


colorPicker.oninput = (e) => setcurrentColor(e.target.value);
slider.onchange = (e) => updateSize(e.target.value);


function setcurrentColor(val){
  currentColor = val;
  document.getElementById("colormode").style.color = currentColor;

}

function updateSize(sizeval){
  currentSize = sizeval;
  grid.innerHTML=" ";
  gridgenerator(currentSize);
  slidervalue.innerHTML = `${currentSize} x ${currentSize}`;
}





function gridgenerator(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('grid-element')
    gridElement.addEventListener('mouseover', changeColor)
    grid.appendChild(gridElement)
  }
}




colormode.addEventListener("click", ()=> {
  currentMode = "color";
});
rainbowmode.addEventListener("click", ()=> {
  currentMode = "rainbow";
});
eraser.addEventListener("click", ()=> {
  currentMode = "eraser";
});

clear.addEventListener("click", ()=> {
  grid.innerHTML = '';
  gridgenerator(currentSize);
})


function changeColor(e) {
  if(currentMode == "color"){
    e.target.style.background = currentColor;
  }
  else if(currentMode == "eraser"){
    e.target.style.background = "white";
  }
  else if(currentMode == "rainbow"){
    e.target.style.background = rainbow();
  }
}



function rainbow(){
  const randomR = Math.floor(Math.random() * 256)
  const randomG = Math.floor(Math.random() * 256)
  const randomB = Math.floor(Math.random() * 256)
  let rgbcolor = `rgb(${randomR}, ${randomG}, ${randomB})`
  return rgbcolor;
}


window.onload = () => {
  gridgenerator(currentSize);
};


