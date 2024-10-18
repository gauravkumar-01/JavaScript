
let products = document.querySelectorAll('section figure')      // Selecting the figures inside section....
// console.log(products);

// for(let item of products){
//     item.addEventListener('click', ()=>{
//         console.log(this.innerText);            // Here, this will depend on  parent, so it will return undefined..
//     })
// }

// We know that 'this' keyword depends on 'how the function is called'.
//NOTE : Here, It is arrow function so in this function 'this' keyword will depend on it's parent. So it will return 'undefined'.....

// To avoid this problem make 'Normal Function' so that we can print 'innerText'.

// ==============================================================================


// for(let item of products){
//     item.addEventListener('click', function(){
//         console.log(this.innerText);            // Here, this will point parent, and return 'undefined..
//     })
// }

// NOTE : It is not a good/optimized way, bcoz in this case, we are making event on each element(that's not a good way....)

// If we will add any element dynamically through DOM , then it will not select that element....

// ==============================================================================

// To avoid these drawbacks we have 'Event D'
    // D -> Delegation.....


// In this case rather than to apply event on all the child, we should apply event on parent and it can access through 'event capturing'.

// Event Delegation -> Parent pr event lgao rather than to select all the childs...

// let section = document.getElementById('container');

// section.addEventListener('click',function(event){
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.innerText);
// })

// In the above case it also responds when we click inside section and outside figure...

// Section ki multiple child nodes hai, to hum check karege ki jab click figure wali node pr hua ho tabhi content print ho.

// target kya hai : section
// target ki kis node pr click hona chahiye : figure.

// Inner text tabhi dikhe jab mera target.nodeName === 'FIGURE' ho...


// Now the problem of will resolve by the below code...

let section = document.getElementById('container');

section.addEventListener('click',function(event){
    // console.log(event);
    if(event.target.nodeName === 'FIGURE'){
        console.log(event.target.innerText);
    }
})
