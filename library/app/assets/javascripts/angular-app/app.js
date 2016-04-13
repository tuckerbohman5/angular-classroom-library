angular
 .module('app', ['ui.router', 'ngResource', 'templates'])
 .config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
     .state('home', {
       url: '/',
       templateUrl: 'home.html',
       controller: 'HomeController as ctrl'
     })
     .state('home.new', {
       url: 'new',
       templateUrl: 'home/new.html',
       controller: 'BooksController as ctrl'
     })
     .state('home.books', {
       url: 'books',
       templateUrl: 'home/books.html',
       controller: 'BooksController as ctrl'
     });
  $urlRouterProvider.otherwise('/');
});