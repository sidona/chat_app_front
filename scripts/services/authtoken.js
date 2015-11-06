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
    var storage=$window.localStorage;
    var cachedToken;
    var userToken='userToken';

    var authToken={

      setToken:function (token, isAuthenticated){
        cachedToken=token;
        storage.setItem(userToken,token);
        isAuthenticated=true;
      },
      getToken:function(){
        if(!cachedToken)
          cachedToken=storage.getItem(userToken);

        return cachedToken;
      },

      isAuthenticated:function(){
        return !!authToken.getToken();
      },
      removeToken:function(){
        cachedToken=null;
        storage.removeItem(userToken)
      }
    }

    return authToken;
  });
