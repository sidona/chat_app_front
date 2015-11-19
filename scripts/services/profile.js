'use strict';

/**
 * @ngdoc service
 * @name frontendApp.profile
 * @description
 * # profile
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('profile', function (ENDPOINT_URI, $resource) {
    return $resource(ENDPOINT_URI + "/profile/:id", {id: '@_id'},
      {
        put: {method: 'PUT'}
      })
  });
