// // Function of Inline Events :

function dosomething(){
    console.log("Bhadwe jab mana kiya tha, to kyu dabaya...");
}

// let btn = document.getElementById('btn');
// console.log(btn);            // It will print the btn.
// console.dir(btn);           // It will return the object and shows the details of the btn..


// ==========================================

let btn = document.getElementById('btn');
btn.onclick = function(){
    console.log("Hello Duniya, It is the 2nd way..");
}