let age = parseInt(prompt("Enter Your Age :"));
// if(age < 5){
//     console.log("Hii");
// }
// else if (age >= 5 && age <= 10){
//     console.log("Hello");
// }

// let naam;        // Here, naam is point to 'undefined' which typecast into 'false'.
let naam = prompt('Enter Your Name : ');

if(age > 5 && naam){
    console.log("age in and operator.....");
}
if(age > 5 || naam){
    console.log("age in or operator.....")
}