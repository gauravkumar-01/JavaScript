// let marks = {   hindi : 89,
//                 english : 88,
//                 maths : 99,
//                 science : 87,
//                 total : function(){
//                     console.log(89 + 88 + 99 + 87);
//                     // bydefault return 'undefined'
//                 },

//                 bulao : function(){
//                     console.log("Gaurav Ko Bulao");
//                 },

//                 methd : function(){
//                     console.log("Inside Method");
//                     return "value returned from methd"
//                 }
//             }

// console.log(marks.maths);
// console.log(marks.total());
// console.log(marks.bulao());     // It prints the values return by function/method.
// console.log(marks.methd());

// ===================================================================== */

let marks = {   hindi : 89,
                english : 88,
                maths : 99,
                science : 87,
                name : "Gaurav",

// Note : To access the properties inside object we use 'this' keyword.
// Here, this keyword will provide the current object.

                total : function(){
                    console.log(this.hindi);
                    return this.science;

                },

                bulao : function(){
                    console.log(`${this.name} ko bulao...`);
                },

//      `` -> These are known as Backticks, used for evaluation.

                methd : function(){
                    console.log("Inside Method");
                    return "value returned from methd"
                }
            }

console.log(marks.maths);
console.log(marks.total());
console.log(marks.bulao());     // It prints the values return by function/method.
console.log(marks.methd());