
// function some(){

// }
// console.log(some());            // It will return "undefined".

// ================================================

// let p1 = new function(){     // new keyword will create constructor. Constructor creates the object.

// }
// console.log(p1);                // It will return "Object".

// ================================================
// async function some(){

// }
// console.log(some());                    // It will return "Promise".

// ================================================

async function some(){
    await new Promise( (resolve, reject ) => {
        setTimeout( () =>{
            console.log('3 sec ho gye...');
            resolve();
        }, 3000);
    })

    await new Promise( (resolve,reject) => {
        setTimeout( () => {
            console.log("2sec ho gye..")
            resolve();
        }, 2000);
    });

    console.log("dono kaam ho gye...");
}

// some();
console.log(some());