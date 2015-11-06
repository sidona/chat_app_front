'use strict';


angular.module('frontendApp')
  .controller('LogoutCtrl', function (authToken,$state) {
   authToken.removeToken();
    $state.go('home');
  });
