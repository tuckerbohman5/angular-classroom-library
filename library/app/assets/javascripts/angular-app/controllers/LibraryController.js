angular
  .module('app')
  .controller('LibraryController', LibraryController);

function LibraryController(Auth, User) {
  var ctrl = this;
  ctrl.user = Auth.currentUser();
  debugger;
  // ctrl.books = Book.query(id: ctrl.user);
};