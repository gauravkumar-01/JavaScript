// function fun(){
//     let name = "Gaurav";

//     function fun2(){
//         console.log(name);
//     }
//     return fun2;        // returning of function
// }
// let fn = fun();         // accepting function
// fn();
// console.log(fn);

/* ================================================= */

// Real-Life Uses :

// function counter(){
//     let count = 5;

//     function getCount(){
//         console.log(count);
//         return count;
//     }

//     // return getCount;
//     return {                // returning the Object.....
//         getCount : function(){
//             return count;
//         }
//     };
// }

// let ct = counter();
// console.log(ct);                 // returned object will store in it.
// console.log(ct());               // It will throw an error, because returned value is an object not a function.
// console.log(ct.getCount());         // Accessing the properties of object by using dot'.' 


/* =================================================================== */

// function counter(){
//     let count = 0;

//     return {
//         getCount : function(){
//             return count;
//         },
//         increment : function(){
//             count += 1;
//         },
//         decrement : function(){
//             count -= 1;
//         },
//         reset : function(){
//             count = 0;
//         }
//     }
// }

// let ct = counter();
// console.log(ct);
// console.log(ct.getCount());

// ct.increment();
// ct.increment();
// ct.increment();
// console.log(ct.increment());
// console.log(ct.getCount());

// ct.decrement();
// console.log(ct.decrement());
// console.log(ct.getCount());

// ct.reset();
// console.log(ct.getCount());