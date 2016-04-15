angular
  .module('app')
  .controller('LibraryController', LibraryController);

function LibraryController(Auth, User) {
  var ctrl = this;
  ctrl.user = User.get(Auth.currentUser());
  ctrl.books = ctrl.user.books
};