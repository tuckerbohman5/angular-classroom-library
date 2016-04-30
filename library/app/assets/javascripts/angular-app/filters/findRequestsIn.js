angular
  .module('app')
  .filter('findRequestsIn', findRequestsIn);

function findRequestsIn(){
  return function(requests, user) {
    for(var i = 0; i < requests.length; i++){
      if (requests[i].owner_id === user) {
        return requests[i];
      }
    }
  }
}
  


