'use strict';

/**
 * @ngdoc service
 * @name frontendApp.alert
 * @description
 * # alert
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('alert', function alert($rootScope,$timeout) {
  var alertTimeout;
  return function(type,title,message,timeout){
    $rootScope.alert={
      hasBeenShown:true,
      show:true,
      type:type,
      message:message,
      title:title
    };
    $timeout.cancel(alertTimeout);
    alertTimeout=$timeout(function(){
      $rootScope.alert.show=true;
    },timeout || 200)
  }
});
