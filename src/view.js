var pageList = new NoteList();

var submitNote = function() {
  content = document.forms[0].elements[0].value
  if (text.length > 0) {
    var note = pageList.createNote(document.forms[0].elements[0].value);
    document.forms[0].elements[0].value = '';
    appendNote(note);
  }
};

var appendNote = function(note) {
  var note = new NotePresenter(note, document.getElementById('notes-list'), document.getElementById('note-content'))
  note.render();
  
// To be put in NotePresenter object:
// Handles which sort of click renders it to whichever div on page
// Abbreviate
// Ellipsis

};
