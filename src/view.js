var pageList = new NoteList();

var submitNote = function() {
  pageList.createNote(document.forms[0].elements[0].value);
  writeList();
};

var writeList = function() {
  var notesList = document.getElementById('notes-list');
  var li = document.createElement('li');
  var note = document.createElement('p');
  var long = pageList.notes[pageList.notes.length - 1].content;
  note.innerHTML = pageList.list()[pageList.list().length - 1];
  note.addEventListener('click', function() {
    var noteContent = document.getElementById('note-content');
    noteContent.innerHTML = long;
  });
  li.appendChild(note);
  notesList.appendChild(li);
};