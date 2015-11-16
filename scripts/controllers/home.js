'use strict';


angular.module('frontendApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.images = [

      {image: 'images/car.jpg',description:'about car'},
      {image: 'images/food.jpg',description:'about food'},
      {image: 'images/gaming.jpg',description:'about gaming'},
      {image: 'images/travel.jpg',description:'about travel'}
    ];
  });
