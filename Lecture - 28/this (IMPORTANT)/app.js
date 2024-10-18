// 5 types of Function Invocation :

/*
    Whenever a JS Code runs a GEC(Global Execution Context) is created, whenever GEC created along with that a global object is also created.
    In case of Browser the global Object is 'Window Object'.
*/

// 1. Regular Function Invocation 
    // function fun(){
    //     console.log(this);          // Here, this will point the Window Object..
    // }
    // fun();       // In direct calling, this will point the Window Object.


// --------------------------------------------------------------------------------------

// 2. Method Invocation
// let obj = {
//     number : 2,
//     fn : function(){
//         console.log(this);              
//     }
// }

// let myfn = obj.fn;              // Ab fn function myfn ke andr aa chuka hai...
// myfn();                 //this is regular function Invocation...// In this case this will point to the window.
// obj.fn();           // this is pointing to the object overwhich it is called...// Function calling is due to Object.

// Question :
// let obj2 = {
//     num : 21,
//     fun : function(){
//         console.log(this);              // Here, this will point the 'object'.
//         function calculate(){
//             console.log(this);          // this ka function hai calculate
//         }
//         calculate();            // Calculate function is calling by Regular Function Invocation. So, this will point the Window.
//     }
// }
// obj2.fun();


// -----------------------------------------------------------------------------------------

// 3. Constructor Invocation : Here, 'this' will always point to the newly created object.

// function CreateObj(){
//     this.x = 20;
// }
// let obj1 = new CreateObj();
// console.log(obj1);
// console.log(obj1.x);            //this will point the newly created object..


// ------------------------------------------------------------------------------------------

// 4. Indirect Calling   call(), apply(), bind()

let obj = {
    a : 20,
    fn : function(){
        console.log(this);
    }
}

let obj2 = {
    a : 50
}


// let obj3 = {
//     name : "Gaurav"
// }

// let obj4 = {
//     a : 27,
//     fn : function(a,b,c){
//         console.log(this,a,b,c);
//     }
// }


// obj.fn();
// obj2.fn();      // Error,    Because function fn is not present in obj2.
obj.fn.call(obj2);              // jab call keyword ke andr argument me kuch send krte hai, to uske reference  se function call hota hai, this keyword usi object ko point karega..


// Ploymorphism is acived by call/reference method.

// obj.fn.call(obj4,1,2,3);
// obj.fn.call(obj,[5,6,7]);


//.apply()

// obj.fn.apply(obj2);


//.bind --> use to bound 'this' keyword to the particular object.

// let obj5 = {
//     fn : function(){
//         console.log(this);
//     }
    
// }

// obj5.fn();  
// obj5.fn.bind(obj5);              'this' is bind to obj5.
// console.log(obj5.fn.bind(obj5));

// let myfun = obj5.fn.bind(obj5);             // 'this' has been bounded to obj5.
// console.log(myfun);
// myfun();        //Rgular function Invocation but it will point object 5 only.


// ------------------------------------------------------------------------------------------

// 5. Arrow Function

    // const fun1 = ()=>{
    //     console.log("This is Arrow Function.");
    // }
