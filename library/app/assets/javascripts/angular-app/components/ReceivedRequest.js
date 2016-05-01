var ReceivedRequest = {
  templateUrl: 'requests/received_request.html',
  bindings: {
    request: '='
  },
  controller: function(){
    
    var ctrl = this;
  },
    
  controllerAs: 'ctrl'
};

angular
  .module('app')
  .component('receivedRequest', ReceivedRequest);