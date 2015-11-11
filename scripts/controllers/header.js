'use strict';


angular.module('frontendApp')
  .controller('HeaderCtrl', function ($scope, authToken,auth) {
    $scope.isAuthenticated = authToken.isAuthenticated;



     $scope.author=auth.authenticatedUser;



      console.log($scope.author)


  });
