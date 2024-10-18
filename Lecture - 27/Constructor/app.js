
// function fun(){

// }

// let naam = fun();
// console.log(fun());        // --> 'undefined'
// console.log(naam);


/* ****************** CONSTRUCTOR ******************* */

// function user(){
    // this.name = "Gaurav Kumar";
    // this.mail = "gk187870@gmail.com";
// }

// let user1 = new user();          //accessing constructor
        /*
            --> 'new' keyword before function calling is creates this function as constructor function.
            --> Constructor function is used to create objects.
        */
// console.log(user1);          // --> It will print an object.

/* *************** To give the custom Values ..************** */

// function fun(name,mail){
//     this.name = name;
//     this.mail = mail;
//     this.description = function(){
//         return `My name is ${this.name}.`;
//     }
// }

// let user2 = new fun("Gaurav","gauravk17@gmail.com");
// let user3 = new fun('Naman','namantyagi835@gmail.com');

// console.log(user2);
// console.log(user2.description());
// console.log(user3);
// console.log(user3.description());

/* ****************************************************************** */

function fun(name,mail){
    this.name = name;
    this.mail = mail;
}

fun.prototype.description = function(){         
    return `my name is ${this.name}.`;
}

// We are still able to access the description method, due to prototype.

let user2 = new fun("Gaurav","gauravk17@gmail.com");
let user3 = new fun('Naman','namantyagi835@gmail.com');

console.log(user2);
console.log(user2.description());
console.log(user3);
console.log(user3.description());