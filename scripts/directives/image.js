'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:image
 * @description
 * # image
 */
angular.module('frontendApp')
  .directive('image', function () {
    return{

      link: function($scope,el){

        el.bind("change", function(e){

          $scope.file = (e.srcElement || e.target).files[0];
          $scope.getFile();
        })

      }

    }
  });
