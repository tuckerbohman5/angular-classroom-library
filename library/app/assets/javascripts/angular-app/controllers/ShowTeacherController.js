angular
 .module('app')
 .controller('ShowTeacherController', ShowTeacherController);
function ShowTeacherController(User, $stateParams) {
   
  var ctrl = this;
  ctrl.user = User.get({ id: $stateParams.id });
}
