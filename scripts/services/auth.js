'use strict';

/**
 * @ngdoc service
 * @name frontendApp.auth
 * @description
 * # auth
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('auth', function auth($http, ENDPOINT_URI, authToken, $state) {

  function authSuccessful(res) {
    authToken.setToken(res.token);
    $state.go('home');
  }

  this.login = function (email, password) {
    return $http.post(ENDPOINT_URI + '/login', {
      email: email,
      password: password
    }).success(authSuccessful);
  }

  this.register = function (email, password) {
    return $http.post(ENDPOINT_URI +'/register', {
      email: email,
      password: password
    }).success(authSuccessful);
  }


});
