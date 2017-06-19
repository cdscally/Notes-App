function testNoteCreation() {
  describe('Creating a new note')
  var note = new Note("It is my birthday");
  assert.isTrue(note.content === "It is my birthday");
};

testNoteCreation();
