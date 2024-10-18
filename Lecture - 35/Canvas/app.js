let canvas = document.querySelector('canvas');

// brush == context 
let ctx = canvas.getContext('2d');

// To make any figure on canvas we will use the context...

// To make rectangle on canvas  
// ctx.fillRect(50,50,150,50);       // x,y, w,h

// To change the style of filled figure...
ctx.fillStyle = 'red';
ctx.fillRect(50,50,150,50);       // x,y, w,h

// To make the border of the Rectangle......

ctx.strokeStyle = 'green';
ctx.strokeRect(50,50,150,50);

// To make any path, first we have to define that we are now begning to path.

// ======================================= PATH =======================================

// ctx.beginPath();
// ctx.moveTo(40,40);      // Moving the brush at starting point...
// ctx.lineTo(100,120);
// ctx.lineTo(120,180);
// ctx.lineTo(150,220);
// ctx.lineTo(50,50);
// ctx.stroke();


// Making Trinagle with stroke...

ctx.beginPath();
ctx.moveTo(120,80);
ctx.lineTo(20,20);
ctx.lineTo(20,140);
ctx.lineTo(120,80);
ctx.stroke();       // To make the lines of triangle...

ctx.fill();     // To fill the color in triangle.
ctx.closePath();



// To drawing text on canvas we use :
ctx.fillStyle = 'blue';
ctx.font = '20px monospace';
ctx.fillText('Gaurav Bhai',70,80);       // (text,x,y)
