function testNoteCreation() {
  var note = new Note("It is my birthday");
  assert.isTrue(note.content === "It is my birthday");
};

testNoteCreation();
