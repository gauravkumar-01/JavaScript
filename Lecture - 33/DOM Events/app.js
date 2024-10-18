/* **********Mouse Enter Detection ********************* */

// 1st method with function 
function do_fun(){
    console.log("Mouse Enter Ho gya hai..");
}

//===================================================

// 2nd method with Id
let butn = document.getElementById('btn');
butn.onmouseenter = function(){
    console.log("Mouse Enter ho chuka hai.....")
    butn.style.color = 'green';
}

/* ***********Mouse Leave Detection ******************** */

butn.onmouseleave = function(){
    console.log("Mouse leave ho gya BHai !!!");
    butn.style.color = 'red';
}


// ======================================================

/*  ******************* Onclick Event ***************************** */

// let click = document.getElementById('clk');
// click.onclick = function(){
//     console.log('Successfully clicked ("_") !');
// }

// click.onclick = function(){
//     console.log('Clicked second function');
// }

//Note => Event Listener : It allow you to run multiple events listner on the same element.

// ===================== Event Listener =========================
let btn = document.getElementById('clk');
function one(){
    console.log('Successfully clicked ("_") !');
}

function two(){
    console.log('Clicked second function');
}

let a = true;
function color(){
    if(a){
        document.body.style.backgroundColor = 'red';
    }
    else{
        document.body.style.backgroundColor = 'yellow';
    }
    a = !a;
    console.log('from color');
}

btn.addEventListener('click',one);
btn.addEventListener('click',two);
btn.addEventListener('click',color);

// ================================================================