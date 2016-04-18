angular 
  .module('app') 
  .controller('NewAuthorController', NewAuthorController); 
function NewAuthorController($location, Author) {
  // we will use $location to route back to another state
  var ctrl = this; 
  // make a new note 
  
  // ctrl.authors = Author.query();
  ctrl.author = new Author();
  ctrl.addAuthor = function() {
    ctrl.author.$save(function() {
      $location.path('new');
    });
  };
}