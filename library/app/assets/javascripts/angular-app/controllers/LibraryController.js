angular
  .module('app')
  .controller('LibraryController', LibraryController);

function LibraryController(Auth) {
  var ctrl = this;
  ctrl.user = Auth.currentUser();
  ctrl.books = ctrl.user.books
};