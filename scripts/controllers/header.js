'use strict';


angular.module('frontendApp')
  .controller('HeaderCtrl', function ($scope, authToken,auth,$rootScope) {
    $scope.isAuthenticated = authToken.isAuthenticated;
    $scope.author=auth.authenticatedUser;

      console.log('autor',$scope.author)
    $scope.css = 'cyborg';


    $scope.bootstraps = [
      {  name: 'simplex',url: 'simplex' },
      {  name: 'cyborg',url: 'cyborg' },
      {  name: 'slate',url: 'slate' },
      {  name: 'sandstone',url: 'sandstone' },
      {  name: 'simplex',url: 'simplex' },
      {  name: 'yeti',url: 'yeti' },
      {  name: 'paper',url: 'paper' },
      { name: 'united',url:'united'}

    ];



  });
