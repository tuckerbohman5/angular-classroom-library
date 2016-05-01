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
       
      })    
    }
    ctrl.checkoutBook = function(){
      ctrl.request.checked_out = true;
      
      Request.update(ctrl.request, function(resp){
       
      })    
    }
  },
    
  controllerAs: 'ctrl'
};

angular
  .module('app')
  .component('receivedRequest', ReceivedRequest);