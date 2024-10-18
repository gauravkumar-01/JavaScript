let can = document.querySelector('canvas');
let ctx = can.getContext('2d');      // Brush will draw in 2d (Snake will move in 2d)....

let cellSize = 10;      // It will work as height and width foe each cell.
let boardh = 150;
let boardw = 300;

let snkcell = [[0,0]];      // Storing the starting position of snake in 2d Array....

let direc = 'right';        // Direction of Snake Movement...



// ==============================================================================

// ==============================================================================


let gameOver = false;           // After touching wall, it will become true...


// time interval for repetation
let intervalId = setInterval(function(){
    update();       // Calling of update function...
    draw();         // Calling of draw function....
},300);



// ==============================================================================


// Adding KeyDown Event : Movement of snake can be controlled by keys.
document.addEventListener('keydown',function(event){
         // Trying to change the direction, using keys....

     if(event.key === 'ArrowDown'){
        direc = 'down';
     }
    else  if(event.key === 'ArrowUp'){
        direc = 'up';
    }
    else  if(event.key === 'ArrowLeft'){
        direc = 'left';
    }
    else{
        direc = 'right';
    }
});

// ==============================================================================

// function to draw Snake...

function draw(){
    if(gameOver === true){
        clearInterval(intervalId);          // After Game Over we have to stop the set interval time period.....

        ctx.fillStyle = 'red';
        ctx.fillText('GAME OVER !!!',90,80);        // (Left,Top margin)
        return;
    }
    // We have traverse on the array elements, that's why we use the loop...

    ctx.clearRect(0,0,boardw, boardh);       // Clear the elements from initial point to final point(0,0 to end of canvas (Height,width of canvas));
    
    for(let cell of snkcell){
        ctx.fillStyle = 'red';
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize);       // (Initial Position(x,y) , height , width)

        // boundry of snake boxex...
        ctx.strokeStyle = 'black';
        ctx.strokeRect(cell[0],cell[1],cellSize,cellSize);

    }

    // Draw the food....
    ctx.fillStyle = 'green';
    ctx.fillRect(food[0],food[1],cellSize,cellSize);
    
    // Draw  the Score...
    ctx.font = '20px monospace';
    ctx.fillText(`Score : ${score}`,20,20);

}

// ==============================================================================
// function to update snake.

function update(){
    // finding the current position of snake...
    // current position of snake can be found from last index of array...
    let currheadx = snkcell[snkcell.length-1][0];
    let currheady = snkcell[snkcell.length-1][1];
    // Array will be = [(tail of snake) ................................ (head of snake)].

    
    // updating new position...
    // let newheadx = currheadx + cellSize;
    // let newheady = currheady;

    let newheadx;
    let newheady;
    if(direc === 'right'){
        newheadx = currheadx + cellSize;
        newheady = currheady;

        if(newheadx === boardw || kha_gya_khudko(newheadx,newheady)){
            gameOver = true;
        }
    }
    else if(direc === 'left'){
        newheadx = currheadx - cellSize;
        newheady = currheady;

        if(newheadx < 0  || kha_gya_khudko(newheadx,newheady)){
            gameOver = true;
        }
    }
    else if(direc === 'up'){
        newheadx = currheadx;
        newheady = currheady - cellSize;

        if(newheady < 0  || kha_gya_khudko(newheadx,newheady)){
            gameOver = true;
        }
    }
    else {
        newheadx = currheadx;
        newheady = currheady + cellSize;

        if(newheady === boardh  || kha_gya_khudko(newheadx,newheady)){
            gameOver = true;
        }
    }

    // pushing new position inside the array..
    snkcell.push([newheadx,newheady]);

    if(newheadx === food[0] && newheady === food[1]){   // When position of food and snake overlaps..
        food = GenerateFood();
        score++;
    }
    else{
        // removing its previous position...
        snkcell.shift();        // It removes from starting...
    }

}


// ==============================================================================

// GENERATING FOOD CELL INSIDE CANVAS....

let food = GenerateFood();

function GenerateFood(){            // It will return two values of x and y in ans array.
    return [Math.round(Math.random()*(boardw-cellSize)/cellSize)*cellSize,
    Math.round(Math.random()*(boardh-cellSize)/cellSize)*cellSize];
}

// ==============================================================================

// SCORE BOX...

let score = 0;

// Snake bite itself then...

function kha_gya_khudko(newheadx,newheady){
    // We will check wether this position of snake is stored in array or not....

    for(let pos of snkcell){
        if(pos[0] === newheadx && pos[1] === newheady){
            return true;
        }
    }
    return false;
}