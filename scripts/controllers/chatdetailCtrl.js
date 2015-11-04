'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ChatdetailctrlCtrl
 * @description
 * # ChatdetailctrlCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ChatdetailctrlCtrl', function ($scope,$stateParams,chatDetail) {
    $scope.chatDetail = chatDetail.get({nameRoom: $stateParams.nameRoom});
  });
