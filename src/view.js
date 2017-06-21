var pageList = new NoteList();

var submitNote = function() {
  pageList.createNote(document.forms[0].elements[0].value);
  document.forms[0].elements[0].value = '';
  writeList();
};

var writeList = function() {
  var notesList = document.getElementById('notes-list');
  var li = document.createElement('li');
  var noteElement = document.createElement('p');
  var fullNote = pageList.notes[pageList.notes.length - 1].content;
  var abbreviatedNote = pageList.list()[pageList.list().length - 1];
  if (fullNote == abbreviatedNote) {
    noteElement.innerHTML = abbreviatedNote;
  } else {
    noteElement.innerHTML = abbreviatedNote + '...';
  }
  noteElement.addEventListener('click', function() {
    var noteContent = document.getElementById('note-content');
    noteContent.innerHTML = fullNote;
  });
  li.appendChild(noteElement);
  notesList.appendChild(li);
};
