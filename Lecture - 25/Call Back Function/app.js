// function A(){

// }

// function B(){

// }

// A(B){

// }

function getBoolean(item){      //It checks boolean type...
    return typeof(item) == 'boolean';
}
function getString(item){       // It checks String type...
    return typeof(item) == 'string';
}
function getNumber(item){       // It checks number type...
    return typeof(item) == 'number';
}

function check(item,fun){           // fun ko accept kiya..
    return fun(item);               // fun ko call kiya, It means fun is a "Call-Back Function"..
}

console.log(check(true,getBoolean));
console.log(check(19,getString));
console.log(check(19,getNumber));

// IMPORTANT :
// In this example, check is HOF and fun is Call-Back Function.........