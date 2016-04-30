var ReceivedRequest = {
  templateUrl: 'requests/received_request.html',
  bindings: {
    request: '='
  },
  controller: function(User, CategoriesService, VenuesService){
    
    var ctrl = this;

    
  controllerAs: 'request'
};

angular
  .module('app')
  .component('receivedRequest', ReceivedRequest);