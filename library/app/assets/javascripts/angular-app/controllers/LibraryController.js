angular
  .module('app')
  .controller('LibraryController', LibraryController);

function LibraryController(Auth, Book, $filter) {

  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });
    
  ctrl.books = Book.query({user_id: 7});


  // ctrl.library = $filter('filter')(ctrl.books, user_id:2);
  
  // ctrl.books = Book.query(id: ctrl.user);
};