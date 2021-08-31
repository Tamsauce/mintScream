// const canvas = document.getElementById('canvas1');
// const ctx = canvas.getContext('2d');

// // Create circle
// const circle = new Path2D();
// circle.rect(150, 50, 150, 50);
// ctx.fillStyle = 'black';
// ctx.fill(circle);

// // Listen for mouse moves
// canvas.addEventListener('mousemove', function(event) {
//   // Check whether point is inside circle
//   if (ctx.isPointInPath(circle, event.offsetX, event.offsetY)) {
//     ctx.fillStyle = 'blue';
//   }
//   else {
//     ctx.fillStyle = 'black';
//   }

//   // Draw circle
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.fill(circle);
// });


// var canvas = document.getElementById('canvas1');
// var ctx = c.getContext('2d');

// canvas.width = 500;
// canvas.height = 400;
// canvas.style.border = '1px solid #000000';
// canvas.style.background = '#b2b2b2';

// ctx.beginPath();
// ctx.fillStyle = 'green';
// ctx.font = `.1rem`



// let box = {
//   x: 50,
//   y: 50,
//   w: 30,
//   h: 30
// }

// ctx.fillRect(box.x, box.y, box.w, box.h);
// ctx.fillStyle ="black"
// ctx.fillText('Hello', box.x, box.y )
// canvas.addEventListener('click', function(ev) {
//   var {x, y} = getCursorPosition(c, ev);
//   console.log('work!!!!')
  
//   if(box.x <= x && x <= box.x+box.w && box.y <= y && y <= box.y+box.h) {
//     location.href = '../Level4/goblin.html';
//   }
// });

// function getCursorPosition(canvas, ev) {
//     var rect = canvas.getBoundingClientRect()
//     var x = ev.clientX - rect.left
//     var y = ev.clientY - rect.top
//     return {x, y};
// }


var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.border = '1px solid #000000';
canvas.style.background = 'lightyellow';





function drawNextLevel(){
    const box = {
        x: 500,
        y: 250,
        w: 600,
        h: 200
      }

    ctx.beginPath();
    ctx.fillStyle = 'aqua';
    ctx.font = '4rem Impact';
    ctx.textAlign = 'center'
    
    ctx.fillRect(box.x, box.y, box.w, box.h);
    ctx.fillStyle ="black"
    ctx.fillText('Click for Next Level', canvas.width/2 + 2 , canvas.height/2 + 2 )
    ctx.fillStyle ="orange"
    ctx.fillText('Click for Next Level', canvas.width/2 , canvas.height/2 )

    canvas.addEventListener('click', function(ev) {
    const {x, y} = getCursorPosition(canvas, ev);
    
    if(box.x <= x && x <= box.x + box.w && box.y <= y && y <= box.y + box.h) {
        alert('You clicked me!');
    }
    
    });

    function getCursorPosition(canvasBox, event) {
        const rect = canvasBox.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        return {x, y};
    }

}




drawNextLevel()