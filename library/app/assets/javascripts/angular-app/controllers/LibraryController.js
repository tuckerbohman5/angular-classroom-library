angular
  .module('app')
  .controller('LibraryController', LibraryController);
function LibraryController(User) {
  var ctrl = this;
  ctrl.user = Auth.currentUser();
  ctrl.books = user.books
};