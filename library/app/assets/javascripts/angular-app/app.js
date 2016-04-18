angular
 .module('app', ['ui.router', 'ngResource', 'templates', 'Devise'])
 .config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
     .state('home', {
       url: '/',
       templateUrl: 'home.html',
       controller: 'HomeController as ctrl'
     })
     .state('home.login', {
      url: 'login',
      templateUrl: 'auth/login.html',
      controller: 'AuthController',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home.library')
        });
      }]
    })
    .state('home.register', {
      url: 'register',
      templateUrl: 'auth/register.html',
      controller: 'AuthController',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function() {
          $state.go('home.library')
        });
      }]
    })
     .state('home.new', {
       url: 'new',
       templateUrl: 'home/new.html',
       controller: 'NewBookController as ctrl'
     })
     .state('home.library', {
       url: 'library',
       templateUrl: 'library/library.html',
       controller: 'LibraryController as ctrl'
     })
     .state('home.books', {
       url: 'books',
       templateUrl: 'home/books.html',
       controller: 'BooksController as ctrl'
     })
     .state('home.newAuthor', {
       url: 'new_author',
       templateUrl: 'author/new.html',
       controller: 'NewAuthorController as ctrl'
     })
     .state('home.teachers', {
       url: 'teachers',
       templateUrl: 'teachers/index.html',
       controller: 'UsersController as ctrl'
     })
     .state('home.showTeacher', {
        url: 'teachers/:id',
        templateUrl: 'teachers/show.html',
        controller: 'ShowTeacherController as ctrl'
      });
  $urlRouterProvider.otherwise('/');
});