console.log('Hello I am free...');

{
    console.log('Hello, I am in Block..');
}


/* Eg - 01 */

// let score = 50;
// if(score > 40){
//     let x = 20;
//     console.log(score);
// }
// console.log(x);     //It will through an error, Because let has block level scope. So, It can not be access outside the block..

// =============================================================================================

/* Eg - 02 */

// let x = 50;
// if(x > 40){
//     let x = 20;
//     console.log(x);
// }
// console.log(x); 

/* Eg - 03 */

// var x = 10;             // It has global Scope..
// {
//     var x = 20;         // Value of x assigned 20.
//     console.log(x);     // 20 will print..
// }
// console.log(x);         // Value has been changed inside block, it has Globsl Scope so value of x will be 20.


// /* Eg - 04 */

// var a = 100;
// function fun(){
//     var a = 50;
//     console.log(a);
// }
// fun();          //A new execution context will create, after execution it will destroy.
// console.log(a);

/* Eg - 05 */

// console.log(a);
// var a = 10;

// console.log(b);     // till now b is "undefined". --> We can not access the vaiable 'b' until it not initialised..
// let b = 20;

console.log(c);      // till now c is "undefined". It can not be accessed before it,s initialisation.
const c = 30;
