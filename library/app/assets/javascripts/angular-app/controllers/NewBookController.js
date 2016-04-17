angular 
  .module('app') 
  .controller('NewBookController', NewBookController); 
function NewBookController(Book, $location) {
  // we will use $location to route back to another state
  var ctrl = this; 
  // make a new note 
  ctrl.book = new Book();
  ctrl.addBook = function() {
    ctrl.book.$save(function() {
      $location.path('books');
    });
  };
}