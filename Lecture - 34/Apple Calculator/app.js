let btns = document.querySelectorAll('button');

let input = document.querySelector('input');

// We will iterate on these button using arrays.

for(let btn of btns){
    btn.addEventListener('click',function(event){       // on clicking button an event occurs then we use as target...
        let btntxt = event.target.innerText;
        if(btntxt === 'C'){
            input.value = '';
        }else if(btntxt === '='){
            try{
                input.value = eval(input.value);
            }
            catch(e){
                input.value = 'Invalid Input';
            }
        }
        else{
            input.value += btntxt;
        }
    })   
}