// console.log("Start");
// console.log("After 4 sec");
// console.log("End");

// ====================================

// EXAMPLE :

// console.log("start")

// setTimeout(function(){
//         console.log("Runs after 4 sec")
//     },4000
// )

// console.log("End");

/*
    Sabse phle "start" chalega,
    phir next statement "4sec" bad chalega to usko browser "Memory" me store karega, then after 4 sec it will sent it into "Callback Queue" After that it will move into "Event loop" then it will move to "Call_Back Stack" of Execution Context.
    tb tk end chal jayega.
    Event loop check karega ki hamara call stack khali hai ya nhi,

    Agr hamara call stack khali hoga to us statement ko stack me bhejega, agr stack khali nhi hua to nhi bhejega, tb tk ye loop continue chalta rahega aur call-back stack ko check krta rahega...

    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    --> Call Stack 'start' print hoga.
    --> setTimeout() function will store in browser for 4 seconds. (as the time given in setTimeout function)
    --> After 4 seconds it will move in Callback Queue.
    --> Then it will move into Event Loop.
    --> Now Event loop will send it in Call Stack.

*/


/* ===================================================== */

// Ques :
// console.log('Start')

// setTimeout(function(){
//     console.log('After 2 sec')
// }, 2000)


// setTimeout(function(){
//     console.log('After 4 sec')
// },4000)
// console.log('End')

// -------------------------------------------------------

//Ques : 

// console.log('Start')

// setTimeout(function(){
//     console.log('After 4 sec')
// },4000)

// setTimeout(function(){
//     console.log('After 2 sec')
// }, 2000)

// console.log('End')

/* Isme phle 2 sec wala print hoga then 4 sec wala print hoga,
Because,
Jb 4 sec wala memory me phuch kr 4 sec ka wait karega,
tb tk 2 sec wala execute ho lagega to vo bhi memory me phuch kr 2 sec ka wait karega..

--------------------  After 2 secs ----------------

2 seconds wala execute ho chuka hoga and 4 sec wale ke 2 seconds remaining honge..
2 sec wala execute hokr queue me phle pahuchega, uske bad 4 sec  wala pahuchega,
And, We know that Queue is FIFO(First In First Out) symantic.

*/

//======================================================

console.log('Start')

setTimeout(function(){
    console.log('After 0 sec')
},0)

console.log('end');