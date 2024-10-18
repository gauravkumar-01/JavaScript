// function sum(){     // Function Declaration
//     let num1 = 10;
//     let num2 = 20;
//     let ans = num1+num2;
//     console.log(ans);
// }

// sum();      // Function Calling
// console.log(sum());

/* ********* Parameterised Function ********** */

function trpsum(num3){      // Parameter
    let num1 = 10;
    let num2 = 20;
    let ans = num1 + num2 + num3;
    console.log(ans);
}

// trpsum(50);        // Argument Passed
// trpsum(30);         // Aggument Passed
// trpsum(100);          // Argument Passed


/* **********  Returning Something from Parameterised Function  **************** */

// function sum2(){
//     let num1 = 20;
//     let num2 = 30;
//     return num1+num2;
// }
// console.log(sum2());


// function sum3(num1,num2){
//     return num1+num2;
// }
// console.log(sum3(10));      //ek Argument kam bheja hai, Isliye NaN hoga..
// console.log(sum3(10,20));


// function print(num1,num2){
//     console.log(num1);
//     console.log(num2);          // num2 ki value declare nhi ki hai, to JavaScript usko undefined se point kr deta hai...
// }
// print(30);
// console.log(print(30));


/* ********** Default Parameterised Function *************** */

// function print1(num1,num2 = 40){
//     console.log(num1);
//     console.log(num2);          // num2 ki value pass nhi ki hai, to JavaScript usko default value se point kr dega...
// }
// console.log(print1(30));
// console.log(print1(30,20));

// function print2(num1 = 50,num2){
//     console.log(num1);
//     console.log(num2);          // num2 ki value declare nhi ki hai, to JavaScript usko undefined se point kr deta hai...
//     console.log(num1+num2);
//     return typeof(num1+num2);
// }
// console.log(print2(30));
// console.log(print2(20,70));

// console.log(print2(10,true));           // true will typecast to 1.
// console.log(print2(10,false));          // false will typecast to 0.
// console.log(print2(10,"gaurav"));       // On summation typecasting will occurs due to string value.