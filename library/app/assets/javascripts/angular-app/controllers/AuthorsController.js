angular
  .module('app')
  .controller('AuthorsController', AuthorsController);
function AuthorsController(Author) {
  var ctrl = this;
  ctrl.authors = Author.query();
};