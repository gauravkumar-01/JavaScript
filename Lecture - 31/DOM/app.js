// ================== GET ELEMENTS BY TAG NAME ==================================

// document will console to access the html file..

// console.log("Accessing HTML File...");
// console.log(document);

// document.getElementsByTagName('h1');
// console.log(document.getElementsByTagName('h1'));           // It return an array of the element of H1.

// document.getElementsByTagName('h2');
// console.log(document.getElementsByTagName('h2'));           // It return an array of the element of H2.


// let h2_arr = document.getElementsByTagName('h2');

// console.log(h2_arr);        // It returns the collection of h2.

// console.log(h2_arr[2]);             // Accessing array elements by using indexing.
// console.log(h2_arr[0]);
// console.log("length : " , h2_arr.length);

// We can use loop on this array..

// console.log('Items of array using loop statement..');
// for(let item of h2_arr){
//     console.log(item);
// }

// let para = document.getElementsByTagName('p');
// console.log(para[2]);
// for(let items of para){
//     console.log(items);
// }


// =================================================================================

// -------------  CHANGE THE STYLING BY USING JAVASCRIPT IN HTML FILE -------------------------

// let para = document.getElementsByTagName('p');
// console.log(para[2]);
// for(let items of para){
//     items.style.color = 'red';
// }

// let h2_arr = document.getElementsByTagName('h2');
// for(let item of h2_arr){
//     item.style.color = 'green';
// }

// =================== GET ELEMENTS BY ID =================================

// console.log(document.getElementById('third'));          // It access only one element of particular id.

// let id = document.getElementById('third');
// id.style.fontSize = '100px';

// =================== GET ELEMENTS BY CLASS NAME =================================

// let clas = document.getElementsByClassName("head3");
// for(let item of clas){
//     console.log(item);
//     item.style.color = 'blue';
// }

// ==================  QUERRY SELECTORS  =================================

// let h1 = document.querySelector('h1');
// console.log(h1);        // It returns the first hitting h1.

// let id = document.querySelector("#third");
// id.style.color = "yellow";

// ==================  QUERRY SELECTORS ALL =================================

// let h2 = document.querySelectorAll('h2');
// console.log(h2);

// let p = document.querySelectorAll(".head3");
// console.log(p);