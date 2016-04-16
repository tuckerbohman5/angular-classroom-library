angular
  .module('app')
  .controller('LibraryController', LibraryController);

function LibraryController(Book, $filter) {
  var ctrl = this;
  ctrl.books = Book.query({user_id:1});

  // ctrl.library = $filter('filter')(ctrl.books, user_id:2);
  
  // ctrl.books = Book.query(id: ctrl.user);
};