let arr = [1,11,10,12,30,33,300,20,22,221,];
console.log(arr);

// let new_arr = arr.sort();       //It will sort Lexicographically..
// console.log(new_arr);

    // NOTE :  It accepts the callback function.
    
// Sorting according to the numerical values.
let sortarr = arr.sort(function(a,b){
    return a-b;     //Ascending
    // return b-a;     //Decending
})
console.log(sortarr)