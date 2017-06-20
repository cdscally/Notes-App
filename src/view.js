var writeList = function() {
    var notesList = document.getElementById('noteslist')
    var note = document.createElement('li');
    note.innerHTML = pageList.list()[pageList.list().length -1];
    notesList.appendChild(note);


}
