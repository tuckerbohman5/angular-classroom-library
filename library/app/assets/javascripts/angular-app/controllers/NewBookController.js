angular 
  .module('app') 
  .controller('NewBookController', NewBookController); 
function NewBookController(Book, $location, Author) {
  // we will use $location to route back to another state
  var ctrl = this; 
  // make a new note 
  ctrl.authors = Author.query();
  ctrl.book = new Book();
  ctrl.addBook = function() {
    ctrl.book.$save(function() {
      $location.path('books');
    });
  };
}