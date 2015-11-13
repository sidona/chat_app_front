'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ChatviewCtrl
 * @description
 * # ChatviewCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ChatviewCtrl', function ($scope,chat) {
    chat.query(function(data){
      $scope.chatRoom=data;
    })

  });
