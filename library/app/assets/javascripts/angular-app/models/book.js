angular 
  .module('app')
  .factory('Book', Book)
function Book($resource) {
  
  var Book = $resource('http://localhost:3000/api/v1/books/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return Book; 
}