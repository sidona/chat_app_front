'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ImageCtrl
 * @description
 * # ImageCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ImageCtrl', function ($scope,Upload, $timeout) {

    $scope.uploadPic = function(file) {
      file.upload = Upload.upload({
        url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
        data: {file: file},
      });

      file.upload.then(function (response) {
        $timeout(function () {
          file.result = response.data;
        });
      }, function (response) {
        if (response.status > 0)
          $scope.errorMsg = response.status + ': ' + response.data;
      }, function (evt) {
        // Math.min is to fix IE which reports 200% sometimes
        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });
    }
  });
