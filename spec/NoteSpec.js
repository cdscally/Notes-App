
describe('Creating a new note', function() {
  it('Can create a new note', function() {
    var note = new Note("It is my birthday");
    expect(note.content).toEqual("It is my birthday");
  });
});
