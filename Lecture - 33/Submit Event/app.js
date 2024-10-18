// Default Behaviour of Form

// let form_el = document.querySelector('form');
// form_el.addEventListener('submit',function(){
//     console.log('Form Submitted Successfully');
// })


// =======================================================

// let form_el = document.querySelector('form');
// form_el.addEventListener('submit',function(event){
//     event.preventDefault();             // It will stop the default behaviour.
//     console.log('Form Submitted Successfully');
// })

// Note : Now our Browser will not get refreshed..

// ================= Accessing Elements of Form =============================

let form_el = document.querySelector('form');

form_el.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(form_el.elements[0].value);                 // Accessing Value of Element at index 0 (1st Input)
    console.log(form_el.elements[1].value);                 // Accessing Value of Element at index 1 (2nd Input)
})