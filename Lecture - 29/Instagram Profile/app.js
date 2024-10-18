/* Image Uploading on Instagram : */


// function step1(){
//     setTimeout(function(){
//         console.log("Image is Selecting");
//         return "Image";
//     },4000)
// }

// function step2(image){
//     setTimeout(function(){
//         console.log(`Photo Editing ${image}..`);
//         return "Edited Image";
//     },2000)
// }

// function step3(){
//     setTimeout(function(){
//         console.log("Searching Caption...")
//         return "Photo + Caption ";
//     },3000)
// }

// function step4(final){
//     setTimeout(function(){
//         console.log(` ${final} Image Uploaded Successfully...`);
//     },2000)
// }



// //Calling
// let img = step1();
// let edtimg = step2(img);
// let cap = step3(edting);
// let upld = step4(cap);

//Due to unusual timing these steps will execute unorderly..


/*

    We can overcome this situation by passing these function inside the previous function..

    step1 ke andr step2
    step2 ke andr step3
    step3 ke andr step4
*/


// ---------------- Better Tarika ----------------------


function step1(st2){                     // Function (Step-2) accept hua..
    setTimeout(function(){
        console.log("Image is Selecting...");
        // return "Image";
        st2('Image..');                  // Step-2 me step 1 ka output send kr rhe hai...
    },4000)
}

function step2(image,st3){                       //cb --> Call-Back...       // Step 2 : @ Arguments(Step1 ka output, Step3 ka function)..
    setTimeout(function(){
        console.log(`Photo Editing ${image}..`);
        // return "Edited Image";
        st3("Edited Image");                     //Step 3 me step 2 ka output send kr rhe hai..
    },2000)
}

function step3(edtimg, st4){                         // Step 3 : 2 Arguments (Step 2 ka output, step 4 ka function.)
    setTimeout(function(){
        console.log(`Searching Caption for ${edtimg}...`);
        // return "Photot + Caption ";
        st4("Image with Caption");                     // Step 4 me step 3 ka output send kr rhe hai..
    },3000)
}

function step4(final){                  // Step 4 me  step 3 ka output accept kr rhe hai..
    setTimeout(function(){
        console.log(` ${final} Uploaded Successfully...`);
    },2000)
}

// ------------------------ Calling -----------------------------------
step1(function(image){          // Step 1 ko ek function pass karaya as an argument, jo step 2 hai
    step2(image,function(edtimg){
        step3(edtimg,function(finalImage){
            step4(finalImage);
        })
    })
})

//Note : This type of Calling is called Call-back Nesting...
    