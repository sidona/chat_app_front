'use strict';


angular.module('frontendApp')
  .controller('HeaderCtrl', function ($scope, authToken) {
      $scope.isAuthenticated=authToken.isAuthenticated;
  });
