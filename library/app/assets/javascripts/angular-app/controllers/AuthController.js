angular
.module('app')
.controller('AuthController', AuthController);

function AuthController($scope, $state, Auth) {

  $scope.login = function() {
    Auth.login($scope.user).then(function() {
      $state.go('home.library');
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function() {
      $state.go('home.library')
    });
  };

 
}