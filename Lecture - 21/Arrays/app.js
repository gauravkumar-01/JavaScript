let arr1 = [1,2,3,4,5];
// console.log(arr1);      //It will print the array's value with its length, not the address.

let arr2 = [1,true,3,"Gaurav",6.8 , null, false];
// console.log(arr2);


// ======================================= length of an array =======================================

console.log(arr1.length);
console.log(arr2.length);

// ===================================================================================================

// // Accessing Value from any index of the array....

// console.log(arr1[3]);       // Get value from an index.
// console.log(arr2[1]);
// console.log(arr1[7]);       //undefined, because index out of range...

// ----------------------------------------------------------------------------------------------------------------

let a = console.log(arr1[2]);       // This console will print the value of index 2 of array1, and does not return anything, so the variable 'a' will point to 'undefined'.
console.log(a);

// ======================================= Type of Array's Value =======================================

    // console.log(typeof(arr1[1]));
    // console.log(typeof(arr2[3]));
    // let ans = typeof(arr2[1]);
    // console.log(ans);
    // console.log(typeof(ans));       // It will be undefined because ans does not have any datatype, it stores a datatype inside itself..


    // let num = typeof(number);   // It will be undefined because num does not have any datatype, it stores a datatype inside itself..
    // console.log("type --> ", num);
    // console.log(typeof(num));
    // console.log(typeof(typeof(num)));

    // let arr3 = [1,true,3,"Gaurav",6.8 , null,["Code", "with" , [8,2,65,4],"Gaurav"], false];
    // console.log(arr3);
    // console.log(arr3[6][2][2]);

// console.log("===========================================================");

//***********************METHODS IN THE ARRAY : **********************

// ==> push() method :

    let arr4 = [];
    console.log(arr4);
    arr4.push(5);
    arr4.push("Gaurav");
    arr4.push(7);
    console.log(arr4.push("Kumar"));            //

    // console.log(arr4);

// ==> pop() method :

    // arr4.pop();
    // console.log(arr4.pop());
    // console.log(arr4);
    // console.log(arr4.pop());
    // console.log(arr4.pop());
    // console.log(arr4.pop());            // It will return undefined, because here our array becomes empty..

// ==> unshift() method :

    let ansu = arr4.unshift(100);
    console.log(arr4);
    console.log(ansu);                  // It will print the length of the Array (arr4).
    console.log(arr4.unshift(101));
    console.log(arr4);

// ==> shift() method :

    // let ans = arr4.shift();
    // console.log(ans);
    // console.log(arr4);