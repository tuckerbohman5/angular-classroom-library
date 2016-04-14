angular
  .module('app')
  .controller('SchoolsController', SchoolsController);
function SchoolsController(School) {
  var ctrl = this;
  ctrl.schools = School.query();
};