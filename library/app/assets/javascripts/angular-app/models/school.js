angular 
  .module('app')
  .factory('School', School);
function School($resource) {
  
  var School = $resource('http://localhost:3000/api/v1/schools/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return School; 
}