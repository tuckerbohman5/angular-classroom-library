var SentRequest = {
  templateUrl: 'requests/sent_request.html',
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
  .component('sentRequest', SentRequest);