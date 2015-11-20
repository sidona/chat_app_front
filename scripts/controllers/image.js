'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ImageCtrl
 * @description
 * # ImageCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ImageCtrl', function ($scope,$http) {
  $scope.filesChanged=function(elm){
    $scope.files=elm.files
    $scope.$apply()

  }
    $scope.upload=function(){
      var formData=new FormData()
      angular.forEach($scope.files,function(file){
        formData.append('file',file)
      })
      $http.post('http://localhost:3000/upload',formData,
        {
          transformRequest:angular.identity,
          headers:{'Content-Type':undefined}
        })
        .success(function(d){
          console.log(d)
        })
    }

  });
