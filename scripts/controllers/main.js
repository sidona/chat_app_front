'use strict';


angular.module('frontendApp')
  .controller('mainController', function ($scope) {
    $scope.css = 'cyborg';


    $scope.bootstraps = [
      {  name: 'simplex',url: 'simplex' },
      {  name: 'hero',url: 'hero' },
      {  name: 'slate',url: 'slate' },
      {  name: 'united',url: 'united' },

    ];

  });
