angular
  .module('app')
  .controller('HomeController', HomeController);
function HomeController(Request, Auth) {
  var ctrl = this;
   Auth.currentUser()
    .then(function(user) {
      ctrl.user = user;
    });
  ctrl.requests = Request.query();
  
}