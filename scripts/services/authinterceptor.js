'use strict';

/**
 * @ngdoc service
 * @name frontendApp.authInterceptor
 * @description
 * # authInterceptor
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .factory('authInterceptor', function authInterceptor(authToken) {
    return {
      request: function (config) {
        var token = authToken.getToken();
        if (token) {
          config.headers['x-access-token'] = token;
        }
        return config;
      },
      response: function (response) {
        return response;
      }
    };
  });

