let grandp = document.getElementById('grandp');
let parent = document.getElementById('parent');
let child = document.getElementById('child');

// grandp.addEventListener('click', ()=>{
//     console.log('GrandFather Clicked !!!');
// })

// parent.addEventListener('click', ()=>{
//     console.log('Father Clicked !!');
// })

// child.addEventListener('click', ()=>{
//     console.log('Child Clicked !');
// })


// ===============================================================================

// grandp.addEventListener('click', ()=>{
//     console.log('GrandFather Clicked !!!');
// }, true)

// parent.addEventListener('click', ()=>{
//     console.log('Father Clicked !!');
// }, true)

// child.addEventListener('click', ()=>{
//     console.log('Child Clicked !');
// }, true)

// ==============================================================================

// grandp.addEventListener('click', ()=>{
//     console.log('GrandFather Clicked !!!');
// },true)

// parent.addEventListener('click', ()=>{
//     console.log('Father Clicked !!');
// },false)

// child.addEventListener('click', ()=>{
//     console.log('Child Clicked !');
// },true)


// =======================================InOrder to stop further propagation... =======================================

// grandp.addEventListener('click', (event)=>{
//     console.log('GrandFather Clicked !!!');
// },true)

// parent.addEventListener('click', (event)=>{
//     event.stopPropagation();
//     console.log('Father Clicked !!');
// },true)

// child.addEventListener('click', (event)=>{
//     console.log('Child Clicked !');
// },true)

//------------------------------------------------------------------------------

grandp.addEventListener('click', (event)=>{
    console.log('GrandFather Clicked !!!');
},false)

parent.addEventListener('click', (event)=>{
    event.stopPropagation();
    console.log('Father Clicked !!');
},false)

child.addEventListener('click', (event)=>{
    console.log('Child Clicked !');
},false)