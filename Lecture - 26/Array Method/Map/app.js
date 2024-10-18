
let marks = [10,20,30,40,50];
let ans = marks.map(function(item,ind){
    // return item+2;                  // iterator will trverse the whole array and add 2 in each element..
    return [item+2,ind];                // returning an array with value and its index......
})

console.log("Previous Marks",marks);
console.log("New Marks", ans);