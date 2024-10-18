// Selecting of Input Event

let inpt = document.querySelector('input');

// inpt.addEventListener('input',function(){
//     console.log("Bhai logo, Input Element chal gya");
// })

// ======================================================

// function funIn(){
//     console.log('Bhai, Function Chal gya..');
// }
// inpt.addEventListener('input',funIn);

// ========= Modification ===========

// function funIn(event){          // We can use any name, generally (e/event)
//     console.log(event);                 // It is an object.
//     console.log("Bhai, Function Chal gya..");

// }
// inpt.addEventListener('input',funIn);

// ===============================================================

// function funIn(e){          // We can use any name, generally (e/event)
//     console.log(e.target);                 // It is an object.
//     console.log("Bhai, Function Chal gya..");

// }
// inpt.addEventListener('input',funIn);

// ===============================================================

function funIn(e){
    console.log(e.target.value);
    // console.log("Bhai, Function Chal gya..");

}
inpt.addEventListener('input',funIn);