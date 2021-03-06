'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AddroomctrlCtrl
 * @description
 * # AddroomctrlCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('AddRoomCtrl', function (chat,$scope,$state,auth) {

    $scope.nameRoom = new chat();

    $scope.addRoom = function () {
      $scope.nameRoom.author = auth.authenticatedUser;
      $scope.nameRoom.$save(function () {
        $state.go('chat');
      });
    };
  });
