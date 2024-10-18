/*  *************  for loop  *************** */

// for(let i = 0 ; i < 10 ; i++){
//     console.log(i);
// }

// for(let i = 0 ; i <= 5 ; i = i+1){
//     for(let j = 0 ; j <= 5 ; j++){
//         if(i == j){
//             break;
//         }
//         console.log(i,j);
//     }
// }


/* **************  while  loop  ********************/

// let num = 100;
// while(num >= 0){
//     console.log(num);
//     num -= 10;
// }

/* *************  for-in loop  *************** */
let person = {
    name : "Gaurav",
    age : 20,
    ismale : true
}

// for(let item in person){        // for-in loop is used inside the Object.
//     console.log(item);          // Print all keys  of Person Objects
// }

/* ********* IMPORTANT ********** */
// for(let item in person){
//     console.log(this.item);          // this statement is out of object, that's why it is unable to get the values..
// }

// for(let item in person){
//     console.log(person[item]);          // It will return the vlaues of all the keys.
// }

// for(let item in person){
//     console.log(`${item} --> ${person[item]}`);          // Print all keys with it's values of Person Objects
// }


/* *************  for-of loop  ************** */

// array = ["Ram","Lakshman","Bharat","Satrughan","Shyam","Mohan"]
// for(let item of array){     // It will returns the values
//     console.log(item);
// }

// for(let item in array){         // It will return the indexes
//     console.log(item);
// }