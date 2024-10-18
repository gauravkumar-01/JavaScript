// Jis pr kaam krna hai, usko phle select karo then apna kaam karo..

// We have  to work on input element...

let titleEl = document.getElementById('title');

let listEl = document.getElementById('list');        // Selecting the list item...

let addbtnEl = document.getElementById('add-btn');  //Selecting add button..

// After clicking button we have to some taks...

addbtnEl.addEventListener('click',function(){
    
    // Extracting value from input...
    let title_text = titleEl.value;

    // Creating the li for appending the extracting value...
    let li = document.createElement('li');

    // Inserting text from input value to li...
    li.innerText = title_text;

    // Appending list to ul
    listEl.appendChild(li);

    // Clearing the input text...
    titleEl.value = '';

    // Removing li element after clicking on it...
    li.addEventListener('click', function(){
        li.remove();
    })


})