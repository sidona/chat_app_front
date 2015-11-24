'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ImageCtrl
 * @description
 * # ImageCtrl
 * Controller of the frontendApp
 */

angular.module('frontendApp').controller('imageCtrl', function ($scope,fileUpload) {


  $scope.uploadFile = function(){
    var file = $scope.myFile;
    console.log('file is ' );
    console.dir(file);
    var uploadUrl = "http://localhost:3000/upload";
   fileUpload.uploadFileToUrl(file, uploadUrl);
  };

});
angular.module('frontendApp').directive('fileModel', ['$parse', function ($parse) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;

      element.bind('change', function(){
        scope.$apply(function(){
          modelSetter(scope, element[0].files[0]);
        });
      });
    }
  };


}])
