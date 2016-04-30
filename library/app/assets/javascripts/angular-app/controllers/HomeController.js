angular
  .module('app')
  .controller('HomeController', HomeController);

function HomeController(Request, Auth, $filter) {
  var ctrl = this;
   Auth.currentUser()
    .then(function(user) {
      ctrl.user = user.id;
    });
  Request.query(function(requests){
    ctrl.requestsIn = $filter('findRequestsIn')(requests, ctrl.user);
    ctrl.requestsOut = $filter('findRequestsOut')(requests, ctrl.user);
  });
  
  
  
}