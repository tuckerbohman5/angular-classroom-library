angular 
  .module('app')
  .factory('Request', Request);
function Request($resource) {
  
  var Request = $resource('http://localhost:3000/api/v1/requests/:id.json', {id: '@id'}, {
  update: { method: 'PATCH' }
});
  return Request; 
}