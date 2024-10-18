let person = {
                name : "Gaurav",
                age : 20,
                Gender : "Male",
                fav_color : "Green"
            }

console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.Gender);
// console.log(person.fav_color);

// console.log(person["age"]);
// console.log(person.name);
// Note : All the objects are stored inside memory bydefault as String.

let person2 = person;
console.log(person2);
console.log(person2.name);

person2.name = "GK Bhai";
console.log(person);

// Note : Object are passed by reference.
