angular
  .module('app')
  .controller('BooksController', BooksController);
function BooksController() {
  var ctrl = this;
  ctrl.books = Book.query();
}