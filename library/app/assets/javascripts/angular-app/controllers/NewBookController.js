angular 
  .module('app') 
  .controller('NewBookController', NewBookController); 
function NewBookController(Book, $location, Author, ReadingLevel, Auth) {
  // we will use $location to route back to another state
  var ctrl = this; 
  // make a new note 
  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });
  ctrl.readingLevels = ReadingLevel.query();
  ctrl.authors = Author.query();
  ctrl.book = new Book();
  ctrl.addBook = function() {
    ctrl.book.$save(function() {
      $location.path('library');
    });
  };
}