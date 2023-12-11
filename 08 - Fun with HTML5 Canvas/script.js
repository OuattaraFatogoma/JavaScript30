const canvas = document.getElementById("draw");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

// draw rectangle 
// context.fillStyle = "rgba(0,255,255,0.3)";
// context.fillRect(100, 100, 150, 60);
// context.fillStyle = "rgba(0,255,100,0.3)";
// context.fillRect(600, 100, 150, 60);

// draw a line 
// context.beginPath();
// context.lineJoin = 'round';
// context.lineCap = 'round';
// context.lineWidth = 20;
// context.moveTo(100, 100);
// context.lineTo(750, 160);
// context.lineTo(250, 160);
// context.lineTo(600, 100);
// context.strokeStyle = "#bada40";
// context.stroke();

// draw arc 
// for(let i = 0; i <100; i++) {
//     x = Math.random() * window.innerWidth;
//     y = Math.random() * window.innerHeight;
//     hue = Math.random() * 360;
//     context.beginPath();
//     context.arc(x, y, 60, 0, 2 * Math.PI, false);
//     context.lineWidth= 5;
//     context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
//     context.stroke();
// }

// draw with the mouse 

let x = 0;
let y = 0;
let isDrawing = false;
let lineWidth = 2;
let direction = false;

window.addEventListener("mousemove", (event)=>{
    if(isDrawing){
        draw(event)
    }
})

window.addEventListener("mousedown",(event)=>{ 
    isDrawing = true;
    [x, y] = [event.x, event.y]
    
});
window.addEventListener("mouseup", ()=> {
    isDrawing = false;
    clearScreen();
});


function draw(event){
    context.beginPath();
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.lineWidth = lineWidth;
    context.moveTo(x, y);
    context.lineTo(event.x, event.y);
    hue = Math.random() * 360;
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    context.stroke();
    [x, y] = [event.x, event.y];


    if(lineWidth>=60 || lineWidth<2) direction = !direction;
    direction ? lineWidth-- : lineWidth++;

}

function clearScreen(){
    setTimeout(()=>{
        context.clearRect(0, 0, innerWidth, innerHeight);
    }, 3000);
}