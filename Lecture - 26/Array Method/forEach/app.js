// forEach () method (array)

let students = ['Sachin','Hardik','Manish','Gaurav',"Akshay"];
// students.forEach(function(i){       // i is the iterator.....
//     console.log(i);
// })

// console.log("=============================");


// for(let i of students){
//     console.log(i);
// }

let ans = students.forEach(         // It accepts a callback function and returns nothing.
    function(item,index){          // It accepts value as well as index..
        console.log(`index is ${index} and item is ${item}`);
    }
)

console.log(ans);