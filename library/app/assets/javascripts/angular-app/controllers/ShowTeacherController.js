angular
 .module('app')
 .controller('ShowTeacherController', ShowTeacherController);
function ShowTeacherController(User, $stateParams, Book) {
   
  var ctrl = this;
  ctrl.books = Book.query();
  ctrl.user = User.get({ id: $stateParams.id });
}
