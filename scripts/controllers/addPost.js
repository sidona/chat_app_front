'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AddpostCtrl
 * @description
 * # AddpostCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('AddPostCtrl', function (post, $scope, $state, auth) {
    $scope.newPost = new post();

    $scope.addPost = function () {
      $scope.newPost.author = auth.authenticatedUser;
      console.log('$scope.newPost.author', $scope.newPost.author);
      $scope.newPost.$save(function () {
        $state.go('home');
      });
    };
  });
