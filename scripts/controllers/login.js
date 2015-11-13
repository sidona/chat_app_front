'use strict';

angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope, alert, auth) {
    //$scope.submit = function () {
    //  $auth.login({
    //    email: $scope.email,
    //    password: $scope.password
    //  }).then(function (res) {
    //    $scope.author = res.data.user.email;
    //    var message = 'Thanks for coming back ' + res.data.user.email + '!';
    //
    //
    //    alert('success', 'Welcome', message);
    //  }).catch(handleError);
    //};

    $scope.submit = function () {
      auth.login($scope.email, $scope.password);

    };


    function handleError(err) {
      alert('warning', 'Something went wrong :(', err.message);
    }
  });
