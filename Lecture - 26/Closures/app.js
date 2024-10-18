function fun(){
    let name = "Gaurav Kumar";
    function print_name(){
        console.log(name);
    }
    print_name();
}
fun();


// function fun(){
//     let name = "Gaurav Kumar";
//     function print_name(){
//         console.log(name);
//     }
//     return print_name();
// }
// let ret_val = fun();     // Function print_name() has been return with its Lexical Environment. So it will not through any error. It found the name variable with its surroundings or Lexical Environment.
// console.log(ret_val);