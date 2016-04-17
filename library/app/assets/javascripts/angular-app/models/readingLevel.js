angular 
  .module('app')
  .factory('ReadingLevel', ReadingLevel);
function ReadingLevel($resource) {
  
  var ReadingLevel = $resource('http://localhost:3000/api/v1/reading_levels/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return ReadingLevel; 
}