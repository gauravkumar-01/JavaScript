// let marks = prompt("Enter Your Marks : ");
// console.log(typeof(marks));
// if(marks > 80){
//     console.log("Grade O");
// }
// else if(marks > 60)
//     console.log("Grade A");
// else if(marks > 40)
//     console.log("Grade B");
// else if(marks > 20)
//     console.log("Grade C");
// else
//     console.log("Fail");


/* ******************************************* */

let marks = prompt("Enter Your Marks : ");

function gradeCardCalculator(marks){
    if(marks > 80){
        console.log("Grade O");
    }
    else if(marks > 60)
        console.log("Grade A+");
    else if(marks > 40)
        console.log("Grade B+");
    else if(marks > 20)
        console.log("Grade C+");
    else
        console.log("Fail");
}

gradeCardCalculator(marks);                 //Function Calling