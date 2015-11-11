'use strict';


angular.module('frontendApp')
  .service('alert', function alert($rootScope,$timeout) {
  var alertTimeout;
  return function(type,title,message){
    $rootScope.alert={
      hasBeenShown:true,
      show:true,
      type:type,
      message:message,
      title:title
    };
    $timeout.cancel(alertTimeout);
    alertTimeout=$timeout(function(){
      $rootScope.alert.hasBeenShown=false;
    }, 5000);

  }
});
