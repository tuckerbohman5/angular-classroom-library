angular 
  .module('app')
  .factory('Author', Author);
function Author($resource) {
  
  var Author = $resource('http://localhost:3000/api/v1/authors/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return Author; 
}