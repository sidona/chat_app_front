'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('PostCtrl', function ($scope, post) {
    post.query(function (data) {
      $scope.posts = data
    });

    $scope.deletePost = function (pos) {
      post.remove({id: pos._id}, function () {
        $scope.posts.forEach(function (p, index) {
          if (p._id == pos._id) $scope.posts.splice(index, 1)
        })
      })
    }


  });
