angular
  .module('app')
  .controller('ReadingLevelsController', ReadingLevelsController);
function ReadingLevelsController(ReadingLevel) {
  var ctrl = this;
  ctrl.readingLevels = ReadingLevel.query();
};