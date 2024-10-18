console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.sqrt(5));
console.log(Math.min(2,3,4,5,6,0));
console.log(Math.max(2,5,3,12,76,89));

console.log("================================================");

console.log(Math.round(10));
console.log(Math.round(10.45));
console.log(Math.round(10.5));
console.log(Math.round(10.52));

console.log("================================================");

console.log(Math.ceil(10.1));
console.log(Math.ceil(10));

console.log("=================================================");

console.log(Math.floor(8));
console.log(Math.floor(8.1));
console.log(Math.floor(7.8));

console.log("====================================================");

console.log(Math.random());

randn = Math.random();
console.log(randn*10);
console.log(Math.floor(randn*10));  // 0-9 will generate..

console.log(Math.floor(randn*100)); // 0 to 99 will generate..
//Jis multiplication factor ka multiply kiya jata hai, utne hi numbers generate ho saktea hai..

// To generate random number between a particular Range.

console.log("########################################################");
// Generating Random Numbers between 21 to 51(51 is excluded).

/*
    => Count the total numbers we required. = 30.
        So, our multiplication factor is 30.
    => We know that a generated number will always start from 0.
        So, we will add 21 in random number.

*/

randnum = Math.random();
console.log(Math.floor(randnum*30) + 21);