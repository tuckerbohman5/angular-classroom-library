angular
  .module('app')
  .filter('findRequestsOut', findRequestsOut);

function findRequestsOut(){

  return function(requests, user) {

    var requestsOut = [];
    for(var i = 0; i < requests.length; i++){
      if (requests[i].requester_id === user) {
        requestsOut.push(requests[i]);
      }
    }
    return requestsOut;
  }
}