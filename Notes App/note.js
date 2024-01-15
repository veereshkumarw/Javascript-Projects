const addBtn = document.querySelector("#btn");
// const save = document.querySelector("");
const container = document.querySelector(".container")


addBtn.addEventListener(
    "click",
    function () {
        addNote();
    }
);

const saveNotes = () => {
    const notes = document.querySelectorAll("#txtarea");
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )
    // console.log(data);
    // we need to store this data in local storage so that it is not erased while refreshed.
    if (data.length === 0) {
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem("notes", JSON.stringify(data));
    }


};



// <!-- <div class="notesss">
// <div id="navbar">
//     <i class="fas fa-save"></i>
//     <i class="far fa-trash-alt"></i>
// </div>
// <textarea id="txtarea">Write ur notes here
// </textarea>
// </div> -->

// here we have created div-notesss withhelp of div. 
// so first we need to add div first and since its class, we need to add it classList----and then just adding the inner html 
// ---since div-notesss is in container div - so we need to add it to container.

const addNote = (text = "") => {
    const notesss = document.createElement("div");
    notesss.classList.add("notesss");
    notesss.innerHTML = `<div id="navbar">
    <i class="fas fa-save save"></i>
    <i class="far fa-trash-alt delete"></i>
    </div>
    <textarea id="txtarea">${text}</textarea>`;

    notesss.querySelector(".delete").addEventListener(
        "click", function () {
            notesss.remove();
            saveNotes();
            // even the deleted notes should be saved
        }
    );


    notesss.querySelector(".save").addEventListener(
        "click", function () {
            saveNotes();
        }
    );
 
    // this is for auto saveNotes, when user pointer moves out of text area it saves automtically using focusout
    notesss.querySelector("textarea").addEventListener("focusout", function () {
        saveNotes();
    });

    // this is related to addnote not save nor delete
    // after creating div we need to add it to main container or head div of html 
    container.appendChild(notesss);
    // when user clicks + to add note then, this also should be saved in local storage, therefore, saving this too so call save notes
    saveNotes();
}





// this is self calling function which stores notes even on refresh
// and also during initial FontFaceSetLoadEvent, an empty note should be displayed
(
    function () {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        // now we have converted back to objects
        if (lsNotes === null) {
            addNote();

        } else {
            lsNotes.forEach(
                (lsNote) => {
                    addNote(lsNote);
                }
            )
        }

    }
)();
