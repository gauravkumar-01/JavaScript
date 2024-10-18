let boolvar = true;
console.log(boolvar);

let newbool = false;
console.log(newbool);
// Note : Here Typecasting of Boolean Attribute will not occurs as the other programming languages.

    // General Equality : Only value will check datatype will not check.
let ans = boolvar == newbool;       //Two Strings will compare, weather they are equal or not.
console.log(ans);

let var2 = false;
console.log(ans == var2);
console.log(ans === var2);

console.log(ans == 1);          // 1 = true
console.log(ans == 0);            // 0 = false.

    // Strict Equality => value as well its datatype will also check..

console.log(ans === var2);  // Value and Datatype both will check...
console.log(ans  == 0);     // Only value will check..
console.log(ans === 0);     // Value and Datatype both will check...