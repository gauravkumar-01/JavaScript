
// ========================= Inner Text ==========================

// let para = document.querySelector('p');
// console.log(para.innerText);        // It does not print the full content, due to display none property.


// ======================== Text Content =========================

// let para2 = document.querySelector('p');
// console.log(para2.textContent);     // It will print the full content, bcoz it is not aware of CSS.

// ========================= Inner HTML ==========================

let para3 = document.querySelector('p');

// Acting like "getter".

console.log(para3.innerHTML);

// Acting like "setter".

para3.innerHTML = 'Hello! Ab Mai purana wala Gaurav nhi hu...';
console.log(para3.innerHTML);