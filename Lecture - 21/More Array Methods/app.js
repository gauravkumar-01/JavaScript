let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);

// ==> slice() method :
    // console.log(arr.slice(5));  // It starts the value from index 5.
    // console.log(arr.slice(2,5));    // It will return the values of index 2 to 4.
    //             //slice(Start Index, End Index) => Last index will not include..
    // console.log(arr);
                /* It will be a non-destructive method, because no change will occurs in the original array. */


// ==> splice() method :

    // console.log(arr.splice(6));     //It removes the values from thee array.
    // console.log(arr);

    // console.log(arr.splice(2,5,"gaurav","kumar","yadav","bhaiya"));   // it removes the values from index 2 to 5.
    //                             // Last index will include..
    // console.log(arr);


// ==> split() method :

    // let url = "https://www.google.co.in/search?q=facebook";
    // console.log(url);
    // let ans_split = url.split('/');
    // console.log(ans_split);
    // console.log(url);


// ==> join() method :

    // let ans = ans_split.join('/');
    // console.log(ans);
    // console.log(url);


// ==> concat() method :

    let arr1 = [10,20,30,40,50];
    let arr2 = [60,"Mohan","Shyam","Shiv"];

    // console.log(arr1+arr2); //It will add both these arrays..
    // console.log(arr1.concat(arr2)); // It will merge the both arrays into single array.

    // console.log(typeof(arr1));
    // console.log(typeof(arr1+arr2));
    // console.log(typeof(arr1.concat(arr2)));

let str = "Gaurav";
let str2 = "Kumar";
// console.log(str+str2);
// console.log(str.concat(str2));

// console.log(typeof(str+str2));
// console.log(typeof(str.concat(str2)));


// // includes() method :

// console.log(arr2.includes("Mohan"));
// console.log(arr1.includes("Ram"));
// console.log(str.includes("aura"));


// indexOf() method :

// console.log(arr1.indexOf(40));
// console.log(arr2.indexOf("Mohan"));
// console.log(str.indexOf("Gaura"));
// console.log(str.indexOf("aug"));


// //reverse() method :

// console.log(arr1.reverse());        // It is a destructive method.
// console.log(arr1);
// console.log(str.reverse());             //It will through an error.

/**************** Reference Type of Array ************************/
// Change in one array leads to change in another array as well which are pointing at same location.
// let arr3 = [2,4,6,8,10];
// let arr4 = arr3;
// console.log(arr3);
// console.log(arr4);

// arr3[0] = "Gaurav";
// console.log(arr3);
// console.log(arr4);