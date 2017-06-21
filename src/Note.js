'use strict';

var Note = function(content) {
  this.content = content;
};

Note.prototype.abbreviate = function(length = 20) {
  return this.content.substring(0, length);
};
