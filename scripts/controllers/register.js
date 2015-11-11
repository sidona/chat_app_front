'use strict';


angular.module('frontendApp')
  .controller('RegisterCtrl', function ($scope, alert,auth) {
    $scope.submit = function () {
      auth.register($scope.email, $scope.password)

        .catch(function (err) {
          alert('warning', 'Unable to create account :(', err.message);
        });
    };
  });
