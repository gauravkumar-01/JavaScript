// To removeChild we have to access its parent

let par = document.querySelector('div');
let child = document.querySelector('h2');

// par.removeChild(child);         // It removes the first content.
// par.removeChild(child);         // It removes the first content.
// par.remove(child);              // It removea all the content present in the file.

// ==============================================================================

// To remove particular child we have to select it.

let id3 = document.querySelector('#id3');

// In such case we dont need to access the parent of element..
id3.remove();