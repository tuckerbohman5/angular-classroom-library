angular
  .module('app')
  .controller('LibraryController', LibraryController);

function LibraryController(Auth, User) {
  var ctrl = this;
  
  ctrl.books = ctrl.user.books
};