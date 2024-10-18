let art = document.querySelector('article');
art.classList.add('gaurav');

// TO add multiclasses we use comma-seperated class name..
art.classList.add('gaurav', 'bkgc' , 'brdr');        // In classlist we can add multiple classe by comma-seperated value..
art.classList.add('kumar');         // We can add another class by its name directly.

// Removing the class.
art.classList.remove('bkgc');


//=========== Toggle the class =============
art.classList.toggle('toggle');

//  Outputs :

// art.classList.toggle('toggle')
// false
// art.classList.toggle('toggle')
// true
// art.classList.toggle('toggle')
// false 


// =========== CONTAINS METHOD ===============

// console.log(art.classList.contains('gaurav'));          // returns true if class is present.
// console.log(art.classList.contains('herf'));            // return false if class is not present.

