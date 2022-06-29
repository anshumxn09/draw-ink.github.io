let drawing = false;
let xCordi = undefined;
let yCordi = undefined;
const color = document.getElementById('color');
const range = document.getElementById('range');
rangeval.innerText = `Pen Size : ${range.value}`;
const myDimension = canvas.getContext('2d');
let coloring = "black";

range.addEventListener('change', ()=> {
    rangeval.innerText = `Pen Size : ${range.value}`;
})

canvas.addEventListener('mousedown', (event) => {
    drawing = true;
    xCordi = event.offsetX;
    yCordi = event.offsetY;
})

canvas.addEventListener('mouseup', (event) => {
    drawing = false;
    xCordi = undefined;
    yCordi = undefined;
})


const drawLines = (x1, y1, x2, y2) => {
    myDimension.beginPath();
    myDimension.moveTo(x1, y1);
    myDimension.lineTo(x2, y2);
    myDimension.strokeStyle = coloring;
    myDimension.lineWidth = range.value * 2;
    myDimension.stroke();
}

const drawOnBoard = (xPoints, yPoints) => {
    myDimension.beginPath();
    myDimension.arc(xPoints, yPoints, range.value, 0, Math.PI*2);
    myDimension.fillStyle = coloring;
    myDimension.fill();
    
} 
canvas.addEventListener('mousemove', (event) => {
    if(!drawing) return;
    else{
    const startMoveX = event.offsetX;
    const startMoveY = event.offsetY;
    drawOnBoard(startMoveX, startMoveY);
    drawLines(xCordi, yCordi, startMoveX, startMoveY);
    xCordi = startMoveX;
    yCordi = startMoveY;
    }
})

clear.addEventListener('click' , () => {
    myDimension.clearRect(0, 0, canvas.width, canvas.height);
})  

color.addEventListener('change', (event)=> {
    coloring = event.target.value;

})