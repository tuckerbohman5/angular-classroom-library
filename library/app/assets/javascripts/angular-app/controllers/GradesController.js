angular
  .module('app')
  .controller('GradesController', GradesController);
function GradesController(Grade) {
  var ctrl = this;
  ctrl.grades = Grade.query();
};