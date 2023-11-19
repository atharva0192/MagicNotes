showNotes();
let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener("click" , function(e){
    let addText = document.querySelector('#addText');
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj =[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes" , JSON.stringify(notesObj));
    addText.value = "";
    showNotes();
})

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj =[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html ="";
    notesObj.forEach(function(element,index) {
        html += `<div id ="${index}" class=" noteCard card mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Notes #${index+1}</h5>
            <p class="card-text">${element}</p>
            <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
        </div></div>`     
    });

    let notesElm = document.getElementById("notes");
    if(notesObj.length!=0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to show here . Use "Add Notes" section above to add notes`
    }
}

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj =[];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes" , JSON.stringify(notesObj));
    showNotes();
}

let addNote = document.getElementById('AddNote');
let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById("searchBtn");
searchInput.addEventListener('input' , function(e){
        let inputVal = searchInput.value.toLowerCase();
        if(inputVal == "") {
            addNote.style.display = "block";
        }
       let notesCard = document.getElementsByClassName("noteCard")
       Array.from(notesCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText.toLowerCase();
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
       })
})

searchBtn.addEventListener("click" , function(e){
    addNote.style.display = "none";
})
