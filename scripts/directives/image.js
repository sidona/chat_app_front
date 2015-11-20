'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:image
 * @description
 * # image
 */
angular.module('frontendApp')
  .directive('fileInput', ['$parse',function ($parse) {
    return{
      restrict:'A',
      link: function(scope,el,attr){

        el.bind('change',function(){
          $parse(attr.fileInput)
            .assign(scope,el[0].files)
          scope.$apply()
        })

      }

    }
  }]);
