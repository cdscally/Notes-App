console.log('List of Notes');

console.log('Notes List exists');

var noteList = new NoteList();

function canCreateNewList() {
  assert.isTrue(noteList);
}

console.log('List is an object');
function getNotesReturnsAnObject() {
  assert.isTrue(typeof noteList.list() == 'object');
}

console.log('List starts empty');
function getNotesStartsEmpty() {
  assert.isTrue(noteList.list().length == 0);
}

console.log('Can add note to list');
function addNoteToList() {
  noteList.createNote('article');
  assert.isTrue(noteList.list()[0].content == 'article');
}

console.log('Abbreviates all notes to 20 characters');
function abbreviateNote() {
  noteList.createNote('Lorem ipsum dolor sit amet.');
  assert.isTrue(noteList.abbreviateNote(noteList.notes[1].content).length == 20)
}

canCreateNewList();
getNotesReturnsAnObject();
getNotesStartsEmpty();
addNoteToList();
abbreviateNote()
