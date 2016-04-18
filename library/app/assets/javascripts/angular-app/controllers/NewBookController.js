angular 
  .module('app') 
  .controller('NewBookController', NewBookController); 
function NewBookController(Book, $location, Author, ReadingLevel) {
  // we will use $location to route back to another state
  var ctrl = this; 
  // make a new note 
  ctrl.readingLevels = ReadingLevel.query();
  ctrl.authors = Author.query();
  ctrl.book = new Book();
  ctrl.addBook = function() {
    ctrl.book.$save(function() {
      $location.path('library');
    });
  };
}