
const btnAdd = document.querySelector(".btn_add");

const notes = JSON.parse(LocalStorage.getItem("notes"));

if(notes){

notes.forEach((noteTxt)=> addNote (noteTxt))

}

btnAdd.addEventListener("click", () => addNote());

function addNote (text =""){

const note = document.createElement("div");

note.classList.add("note-wrapper");

note.innerHTML = `< class="operations">


<button class="edit fas fa-edit"></button>

<button class="delete fas fa-trash-alt"></button>

</div>

<div class="main ${text? "" : "hidden"}"></div>

<textarea class="${text ? "hidden" : ""}"></textarea>';


const editBtn = note.querySelector(".edit");

const deleteBtn = note.querySelector(".delete");

const mainEl = note.querySelector(".main");

const textAreaEL = note.querySelector("textarea");

textAreaEl.value = text;
mainEl.innerHTML=text;

deleteBtn.addEventListener("click", () => {

    note.remove();

    updates();
});
editBtn.addEventListner("click",()=>{
    mainEL.classList.toggle("hidden");
    textAreaEL.classList.toggle("hidden");

});

textAreaEL.addEventListner("click",())=>{
    mainE
}