//Promises :
// Ya to apna promise "resolve" hoga ya fir "reject" hoga...

// let promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let data = "Hello Dosto!, it is our Promise.";      //ya to data milega ya nhi milega...
//         // console.log(data);
//         resolve(data);          // Jb data mil jayega..

//         let err = "OOP's, Dikkat aaa gyiii...";
//         // console.log(err);
//         reject(err);        // jab data nhi milega
//     },3000);
// });

// promise.then(function(data){            //jb resolve hoga tb..
//     console.log(data);
// }).catch(function(err){            // jb reject ho jayega... 
//     console.log(err);
// })
// console.log("end");


// ================================================================================================

// let promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
        
//         // resolve('Hello! , Mai resolve ho gya..');
//         reject('It is reject function');
//     },3000);
// });

// promise.then(function(data){            //jb resolve hoga tb..
//     console.log(data);
// })
// .catch(function(err){            // jb reject ho jayega... 
//     console.log(err);
// })


// ===============================================================================================

// let p1 = new Promise( (resolve , reject) => {                   // Arrow Function
//     console.log("Wait for 3 sec, work in Progress...")
//     setTimeout(() => {
//         resolve();
//         reject();
//     }, 3000)
// });

// p1.then( ()=> {
//     console.log("Congratulations, Work done Successfully !!!");
// }).catch( () => {
//     console.log("Ye to Moye Moye ho gya, Error aa gyo...");
// })

// =================================================================================================

let p1 = new Promise(resolve =>{
    setTimeout(() => resolve("Done"),1000)
})
p1.then(alert);

// ==================================================================================================

// .then chaining ..

// let p1 = new Promise((resolve,reject) => {
//     console.log("3 sec wait karo...");
//     setTimeout( () => {
//         resolve();
//     },3000);
// })


// p1.then(() => {
//     console.log("Work done successfully !!");

//     return new Promise((resolve,reject) => {
//         console.log("Run ho gya, maje karo....");
//         setTimeout( () => {
//             console.log('2 sec lg gye Bhai Shahab');
//             // resolve();
//             reject();
//         }, 2000);
//     })
// })
// .then( () => {
//     console.log('Dono kaam ho gye Bhai...');
// })
// .catch(() => {
//     console.log("Error Occured !!");
// })

// there will be vetical a long chain of then, if we use resolve function again & again.