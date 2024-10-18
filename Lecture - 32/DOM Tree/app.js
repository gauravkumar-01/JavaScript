// ================== Traversing from Child to Parent =============================

// let p1 = document.querySelector('#para1');
// console.log(p1.parentElement);          // It is correct.
// console.log(p1.parentElement());          // It is incorrect, because it is a property not a method.

// console.log(p1.parentElement.parentElement);        // section
// console.log(p1.parentElement.parentElement.parentElement);      // body
// console.log(p1.parentElement.parentElement.parentElement.parentElement);        // html
// console.log(p1.parentElement.parentElement.parentElement.parentElement.parentElement);      // null
// console.log(p1.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);        // null will not any parent..


// ===================== Traversing from Parent to Child ============================

// let arti = document.querySelector('article');
// console.log(arti);
// console.log(arti.children);        // It will print the collection of children(all the childs).

// let coll = arti.children;
// console.log(coll);

// for(let item of coll){
//     item.style.color = 'blue';
//     item.style.fontSize = '25px';
// }

// ===================== Element Sibling ======================

// let d3 = document.querySelector('#d3');
// console.log(d3);
// console.log(d3.nextElementSibling);         //Next Element Sibling
// console.log(d3.previousElementSibling);     // Previous Element Sibbling