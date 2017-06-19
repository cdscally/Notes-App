console.log('List of Notes');

console.log('Notes List exists');

var list = new List();


function canCreateNewList() {
  assert.isTrue(list);
};

console.log('List is an object');
function getArticlesReturnsAnObject() {
  assert.isTrue(typeof list.getArticles() == 'object');
};

console.log('List starts empty');
function getArticlesStartsEmpty () {
  assert.isTrue(list.getArticles().length == 0);
};

canCreateNewList();
getArticlesReturnsAnObject();
getArticlesStartsEmpty();
