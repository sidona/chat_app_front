'use strict';

/**
 * @ngdoc service
 * @name frontendApp.authInterceptor
 * @description
 * # authInterceptor
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .factory('authInterceptor', function (authToken) {

    return {
      request:function(config){
        var token=authToken.getToken();

        if(token)
          config.headers.Authorization='Bearer '+token;
        return config;
      },
      response:function(response){

        return response;

      }
    };

    //return{
    //  request:addToken
    //}
    //function addToken(config){
    //  var token=authToken.getToken();
    //  if(token){
    //    config.headers=config.headers||{};
    //    //authorization header
    //    config.headers.Authorization='Bearer '+token
    //  }
    //  return config;
    //}


  });
