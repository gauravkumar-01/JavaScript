
let todo = {
    title : 'Buy Flowers',
    desc : function(){
        return `Your task is to ${this.title} .`;
    }
}

// console.log(todo);
// console.log(todo.title);
// console.log(todo.desc());
console.log(todo.Sachin);            //--> It will print 'undefined' because Sachin is not present in object todo.
// console.log(fun());             //--> It will also through an error because the function fun() is not present in the object todo.

console.log(todo.toString());       // It will not through any error even it is not present in todo object, this occurs due to prototype..