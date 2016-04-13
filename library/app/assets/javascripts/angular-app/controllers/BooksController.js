angular
  .module('app')
  .controller('BooksController', BooksController);
function BooksController(Book) {
  var ctrl = this;
  ctrl.books = Book.query();
};