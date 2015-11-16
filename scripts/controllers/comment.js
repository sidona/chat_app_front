'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:CommentCtrl
 * @description
 * # CommentCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('CommentCtrl', function ($scope,post,$stateParams) {
    $scope.postDetail = post.get({id: $stateParams.id});

  });
angular.module('frontendApp')
  .controller('AddCommentCtrl',function($scope,postDetail,$state,$stateParams,auth){
    $scope.comments = postDetail.get({id: $stateParams.id});

    $scope.addComment=function(){
      $scope.comments.author = auth.authenticatedUser;
      $scope.comments.$save(function(){
        $state.go('home')
      })
    }
  })
