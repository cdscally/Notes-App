function NoteList() {
  this.notes = [];
}

NoteList.prototype.list = function() {
  return this.notes;
};

NoteList.prototype.createNote = function(content) {
  let note = new Note(content);
  this.notes.push(note);
};

NoteList.prototype.abbreviateNote = function(content, length = 20) {
  return content.substring(0, length);
};
