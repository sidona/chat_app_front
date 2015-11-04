'use strict';

/**
 * @ngdoc service
 * @name frontendApp.chat
 * @description
 * # chat
 * Factory in the frontendApp.
 */
angular.module('frontendApp')
  .factory('chat', function (ENDPOINT_URI,$resource) {
    return $resource(ENDPOINT_URI +'/api/chat' );

    create: { method: 'post' }

  })
.factory('chatDetail', function (ENDPOINT_URI,$resource) {
  return $resource(ENDPOINT_URI +'/api/chat/:nameRoom',{nameRoom:'@nameRoom'} );

    create: { method: 'post' }

  })
  .factory('socket',function($rootScope){
    var socket=io.connect('http://localhost:3000');
    return {
      on: function(eventName, callback){
        socket.on(eventName, callback);
      },
      emit: function(eventName, data) {
        socket.emit(eventName, data);
      }
    };
  })

