'use strict';

/**
 * @ngdoc service
 * @name frontendApp.post
 * @description
 * # post
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('post',
  function (ENDPOINT_URI, $resource) {
    return $resource(ENDPOINT_URI + "/post/:id", {id: '@_id'},
      {
        delete: {method: 'DELETE'},
        post: {method: 'POST'}
      })
  });

angular.module('frontendApp')
  .service('postDetail', function (ENDPOINT_URI, $resource) {
    return $resource(ENDPOINT_URI + '/post/:id', {id: '@_id'},
      {
        post: {method: 'POST'}
      }
    )
  });
