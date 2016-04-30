angular
  .module('app')
  .controller('BooksController', BooksController);
function BooksController(Book, Auth, Request, $state) {
  var ctrl = this;

  Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });

  ctrl.borrowBook = function(book) {
    ctrl.request = new Request();
    ctrl.request.owner_id = book.user.id; 
    ctrl.request.book_id = book.id;
    
    ctrl.request.$save(function(){
      $state.go('home.library');
    })
  } 

  ctrl.books = Book.query();
};