'use strict';


angular.module('frontendApp')
  .controller('LogoutCtrl', function (auth, $state) {
    auth.logout();
    $state.go('home');
  });
