angular
  .module('app')
  .filter('findRequestsIn', findRequestsIn);

function findRequestsIn(){
  return function(requests, user) {
    
    var requestsIn = [];
    for(var i = 0; i < requests.length; i++){
      if (requests[i].owner_id === user) {
        requestsIn.push(requests[i]);
      }
    }
    return requestsIn;
  }
}
  


