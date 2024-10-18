
// function Person(first,last,mail){
//     this.fst = first;
//     this.lst = last;
//     this.email = mail;
// }

// Person.prototype.printname = function(){
//     console.log(`My name is ${this.fst} ${this.lst}. `);
// }
// Person.prototype.getname = function(){
//     return this.fst + " " + this.lst;
// }

// let p1 = new Person('Gaurav','Kumar','gk@gmail.com');           //Calling of Constructor
// console.log(p1);
// console.log(p1.email);
// console.log(p1.printname());
// console.log(p1.email);
// console.log(p1.getname());


// ------------------------------------

/* *********** Class Syntax : ************ */

class Person{
    constructor(fst,lst,email){
        this.first = fst;
        this.last = lst;
        this.mail = email;
    }
    getname(){
        return `${this.first} ${this.last}.`
    }
    printname(){
        console.log(`My name is ${this.first} ${this.last}.`)
    }
}


// let p2 = new Person('MS','Dhoni' , 'msd07@gmail.com');
// console.log(p2);
// console.log(p2.mail);
// console.log(p2.getname());
// p2.printname();

// ------------------------------------------------------------------------

// class Student{
//     constructor(fst,lst,email){
//         this.first = fst;
//         this.last = lst;
//         this.mail = email;
//     }
//     getname(){
//         return `${this.first} ${this.last}.`
//     }
//     printname(){
//         console.log(`My name is ${this.first} ${this.last}.`)
//     }
// }

// Note : Insted of again defining the class we can inherit the Person class and can access it's all properties.

class Student extends Person{               // Person class inherits.
    constructor(fst,lst,email,groupno){            // Overriding of Constructor.
        super(fst,lst,email);                     // This all will set in Person class.
        this.group = groupno;
    }
    getname(){
        return `Super se bhi upar ${this.first} ${this.last}.`;
    }
}

let s1 = new Student('Barak','Obama','bobama@gmail.com',4);
console.log(s1);
console.log(s1.getname());
console.log(s1.mail);
s1.printname();
console.log(s1.group);