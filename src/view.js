var pageList = new NoteList();

var writeList = function() {
    var notesList = document.getElementById('notes-list')
    var note = document.createElement('li');
    note.innerHTML = pageList.list()[pageList.list().length -1];
    notesList.appendChild(note);


}
