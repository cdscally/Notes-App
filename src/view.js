var writeList = function() {
    var notesList = document.getElementById('noteslist')
    var li = document.createElement('li');
    var note = document.createElement('BUTTON');
    var long = pageList.notes[pageList.notes.length -1].content
    console.log(long)
    note.innerHTML = pageList.list()[pageList.list().length -1];
    note.addEventListener('click', function(){
      var noteContent = document.getElementById('note-content')
      noteContent.innerHTML = long;
    })
    li.appendChild(note)
    notesList.appendChild(li);
}
