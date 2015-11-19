'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:EditprofileCtrl
 * @description
 * # EditprofileCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('EditprofileCtrl', function ($scope,auth,profile,$state,$stateParams) {

    $scope.profiles = profile.get({id: $stateParams.id});
    console.log($scope.profiles)
    $scope.author=auth.authenticatedUser;
    $scope.name=auth.authenticatedUserName;
    $scope.location=auth.authenticatedUserLocation;
    console.log($scope.name)
    $scope.addDataProfile=function(){
      $scope.profiles.save(function(){
        $state.go('home')
      })
    }

  });
