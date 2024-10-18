/* ==================================== */
    /* Ques : 1 */
// var a = 20;
// function fun(){
//     console.log('Inside fun');
//     console.log(a);
// }

// console.log(a);
// fun();

/* =============================================== */

    /* Ques : 2 */
// console.log(a);         // --> Hoisting
// fun();                  // --> Hoisting
// function fun(){
//     console.log('Inside fun');
//     console.log(a);
// }
// var a = 20;
// console.log(a);

/* ============================================== */

    /* Ques : 3 */
// var a = 10;
// sam();
// function sam(){
//     console.log(a);
//     console.log('Inside Sam');
// }
// console.log(a);

/* =============================================== */

    /* Ques : 4 */
// console.log(a);      // Variable 'a' can not be accessed before inititalization bcoz it declared with 'let'.
// sam();
// function sam(){
//     console.log(a);
//     console.log('Inside Sam');
// }
// let a = 10;
// console.log(a);

/* =============================================== */

    /* Ques : 5 */
// console.log(b);
// var b = 10;

// function fun(){
//     console.log(b);
// }
// fun();

/* =============================================== */

    /* Ques : 6 */
// var a = 10;
// function fun1(){
//     console.log("Hii");
//     function fun2(){
//         console.log(a);
//     }
//     fun2();
// }
// console.log(a);
// fun1();