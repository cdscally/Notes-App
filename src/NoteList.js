function NoteList() {
  this.notes = [];
}

NoteList.prototype.list = function() {
  var abbreviatedNotes = [];
  for (i = 0; i < this.notes.length; i++) {
    abbreviatedNotes.push(this.abbreviateNote(this.notes[i].content));
  }
  return abbreviatedNotes;
};

NoteList.prototype.createNote = function(content) {
  let note = new Note(content);
  this.notes.push(note);
};
