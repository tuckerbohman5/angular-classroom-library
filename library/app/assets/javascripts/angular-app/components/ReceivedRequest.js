var ReceivedRequest = {
  templateUrl: 'requests/received_request.html',
  bindings: {
    request: '='
  },
  controller: function(Request){
    var ctrl = this;

    ctrl.approveRequest = function(){
      Request.get({id: this.id}, function(response){
        debugger;
        ctrl.request = response
      });
      ctrl.request.approved = true;

      ctrl.request.$save
    }
  },
    
  controllerAs: 'ctrl'
};

angular
  .module('app')
  .component('receivedRequest', ReceivedRequest);