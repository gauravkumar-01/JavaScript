let btn = document.querySelector('#btn');
let bdy = document.querySelector('body');


btn.addEventListener('mouseenter',function(){
    console.log('Mouse Entered !!');
    bdy.style.backgroundColor = 'yellow';
})
btn.addEventListener('mouseleave',function(){
    console.log('Mouse Leave');
    bdy.style.backgroundColor = 'blue';
})
btn.addEventListener('click',function(){
    console.log('Clicked Successfully!!');
    bdy.style.backgroundColor = 'green';
})
btn.addEventListener('dblclick', function(){
    console.log('Double Clicked');
    bdy.style.backgroundColor = 'red';
})