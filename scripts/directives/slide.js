'use strict';

/**
 * @ngdoc directive
 * @name frontendApp.directive:slide
 * @description
 * # slide
 */
angular.module('frontendApp')
  .directive('slide', function ($timeout) {
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: '../views/slider.html',
      scope: {
        images: '='
      },
      link: function (scope, element, attrs) {


        scope.currentIndex = 0;

        scope.prevSlide = function () {
          scope.direction = 'left';
          scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
        };

        scope.nextSlide = function () {
          scope.direction = 'right';
          scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;

        };


        scope.setCurrentSlideIndex = function (index) {
          scope.direction = (index > scope.currentIndex) ? 'left' : 'right';
          scope.currentIndex = index;
        };

        scope.isCurrentSlideIndex = function (index) {
          return scope.currentIndex === index;
        };

        scope.$watch('currentIndex',function(){
          scope.images.forEach(function(image){
            image.visible=false;
          });
          scope.images[scope.currentIndex].visible=true;
        });


        var timer;

        var sliderFunc = function () {
          timer = $timeout(function () {
            scope.nextSlide();
            timer = $timeout(sliderFunc, 3000);
          }, 3000);
        };

        sliderFunc();

        scope.$on('$destroy', function () {
          $timeout.cancel(timer);
        });


      }

    }

  });

angular.module('frontendApp')
  .animation('.slide-animation', function () {
  return {
    beforeAddClass: function (element, className, done) {
      var scope = element.scope();

      if (className == 'ng-hide') {
        var finishPoint = element.parent().width();
        if(scope.direction !== 'right') {
          finishPoint = -finishPoint;
        }
        TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
      }
      else {
        done();
      }
    },
    removeClass: function (element, className, done) {
      var scope = element.scope();

      if (className == 'ng-hide') {
        element.removeClass('ng-hide');

        var startPoint = element.parent().width();
        if(scope.direction === 'right') {
          startPoint = -startPoint;
        }

        TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
      }
      else {
        done();
      }
    }
  };
});
