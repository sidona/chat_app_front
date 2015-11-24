'use strict';


angular.module('frontendApp')
  .controller('HeaderCtrl', function ($scope, authToken, auth, $rootScope) {
    $scope.isAuthenticated = authToken.isAuthenticated;
    $scope.authService = auth;
  });
