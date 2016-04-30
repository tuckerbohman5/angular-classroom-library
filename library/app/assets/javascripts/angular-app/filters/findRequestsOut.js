angular
  .module('app')
  .filter('findRequestsOut', findRequestsOut);

function findRequestsOut(){
  return function(requests, user) {
    for(var i = 0; i < requests.length; i++){
      if (requests[i].requester_id === user) {
        return requests[i];
      }
    }
  }
}