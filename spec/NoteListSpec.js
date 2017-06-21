describe('Note List', function() {

  var noteList = new NoteList();

  it('Can create a new note list', function() {
    expect(noteList).toBeDefined();
  });

  it('Starts with empty list', function() {
    expect(noteList.list().length).toEqual(0);
  });

  it('Can add note to list', function() {
    noteList.createNote('article');
    expect(noteList.list()[0].content).toEqual('article');
  });

  it('Abbreviates all notes to 20 characters', function() {
    noteList.createNote('Lorem ipsum dolor sit amet.');
    expect(noteList.abbreviateNote(noteList.notes[1].content).length).toEqual(20);
  });
  
});
