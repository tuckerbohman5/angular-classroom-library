angular 
  .module('app')
  .factory('Grade', Grade);
function Grade($resource) {
  
  var Grade = $resource('http://localhost:3000/api/v1/grades/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return Grade; 
}