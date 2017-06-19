console.log('List of Notes');

console.log('Notes List exists');

var list = new List();


function canCreateNewList() {
  assert.isTrue(list);
};

console.log('List is an object');
function getNotesReturnsAnObject() {
  assert.isTrue(typeof list.getNotes() == 'object');
};

console.log('List starts empty');
function getNotesStartsEmpty () {
  assert.isTrue(list.getNotes().length == 0);
};

console.log('Can add note to list');
function addNoteToList() {
  list.addNote('article');
  assert.isTrue(list.getNotes()[0] == 'article');
};

console.log('Abbreviates all notes to 20 characters');
function abbreviatesNotes() {
  var noteSpy = function Note() {
    this.content = 'Lorem ipsum dolor sit amet.';
  };
  list.addNote(noteSpy);

};

canCreateNewList();
getNotesReturnsAnObject();
getNotesStartsEmpty();
addNoteToList()
