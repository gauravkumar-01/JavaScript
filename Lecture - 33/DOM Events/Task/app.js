let btn = document.getElementById('btn');

let bdy = document.querySelector('body');

btn.addEventListener('click',function(){
    console.log('Clicked Successfully !!');
    bdy.style.backgroundColor = 'green';
})

