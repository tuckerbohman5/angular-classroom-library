angular
  .module('app')
  .controller('BooksController', BooksController);
function BooksController(Book, Auth) {
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.borrowBook = function(book) {
    debugger;
  } 

  ctrl.books = Book.query();
};