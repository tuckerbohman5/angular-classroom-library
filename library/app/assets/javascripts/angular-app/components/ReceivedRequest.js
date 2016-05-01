var ReceivedRequest = {
  templateUrl: 'requests/received_request.html',
  bindings: {
    request: '='
  },
  controller: function(Request){
    var ctrl = this;
    
    ctrl.approveRequest = function(){
      ctrl.request.approved = true;
      
      Request.update(ctrl.request, function(resp){
       debugger;
      })    
    }
  },
    
  controllerAs: 'ctrl'
};

angular
  .module('app')
  .component('receivedRequest', ReceivedRequest);