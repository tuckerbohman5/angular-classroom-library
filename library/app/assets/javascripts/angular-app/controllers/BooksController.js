angular
  .module('app')
  .controller('BooksController', BooksController);
function BooksController() {
  var ctrl = this;
  ctrl.books = [
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling'
    },
    {
      title: 'Hunger Games',
      author: 'Suzanne Collins'
    },
    {
      title: 'The Giver',
      author: 'Lois Lowry'
    }
  ];
}