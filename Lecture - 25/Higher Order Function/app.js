/* ************** Example - 01*************** */

// function a(fn){     // Function B accepts as an argument, Hence a ia a HOF.
//     console.log("Hello, I am inside A");
//     fn();
//     console.log('I am again inside A');
// }

// function b(){
//     console.log('Hello, I am inside B');
// }

// a(b);  // Function b passes as an argument


/* ************** Example - 02**************** */

// function a(){
//     console.log('Inside A');
//     function b(){
//         console.log("Inside B");
//     }
//     return b;       // Function b will return.
// }
// let temp = a();          // Function b will accepts as.
// console.log(temp);
// console.log(temp());


/* ****************** Example - 03 (Real-Life Uses..) ***************** */

// function getNumber(ary){
//     let result = [];
//     for(let item of ary){
//         if(typeof(item) == 'number'){
//             result.push(item);
//         }
//     }
//     return result;
// }

// function getString(ary){
//     let result = [];
//     for(let item of ary){
//         if(typeof(item) == 'string'){
//             result.push(item);
//         }
//     }
//     return result;
// }

// function getBoolean(ary){
//     let result = [];
//     for(let item of ary){
//         if(typeof(item) == 'boolean'){
//             result.push(item);
//         }
//     }
//     return result;
// }
// let arr = ['sam',10,20,true,false,'Gaurav',true,50,"Kumar"];
// console.log(getBoolean(arr));
// console.log(getNumber(arr));
// console.log(getString(arr));


/* *************** Example - 04 (Optimised HOF) *************** */


function getBoolean(item){      //It checks boolean type...
    return typeof(item) == 'boolean';
}
function getString(item){       // It checks String type...
    return typeof(item) == 'string';
}
function getNumber(item){       // It checks number type...
    return typeof(item) == 'number';
}


function get(ary, fn){          // Array and Function  is accepted here.....
    let result = [];
    for(let item of ary){
        if(fn(item)){
            result.push(item);
        }
    }
    return result;
}

let arr = ['sam',10,20,true,false,'Gaurav',true,50,"Kumar"];
console.log(get(arr,getBoolean));
// console.log(get(arr,getString));
// console.log(get(arr,getNumber));