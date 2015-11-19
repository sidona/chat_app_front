'use strict';

/**
 * @ngdoc service
 * @name frontendApp.authToken
 * @description
 * # authToken
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .factory('authToken', function ($window) {
    var storage = $window.localStorage;
    var userToken = 'userToken';
    //var cachedToken;

    var isAuthenticated = false;

    var authToken = {

      getToken: function () {
        return storage.getItem(userToken)
      },

      setToken: function (token) {
        storage.setItem(userToken, token);
        //cachedToken = token;
        isAuthenticated = true;
      },

      isAuthenticated: function () {
        return !!authToken.getToken();
      },
      removeToken: function () {
       // cachedToken = null;
        storage.removeItem(userToken);
        isAuthenticated = false;
      }
    }

    return authToken;
  });

