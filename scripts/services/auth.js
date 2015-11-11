(function () {
  'use strict';
  /**
   * @ngdoc service
   * @name frontendApp.auth
   * @description
   * # auth
   * Service in the frontendApp.
   */
  angular.module('frontendApp')
    .service('auth', function auth($http, ENDPOINT_URI, authToken, $state, alert) {

      this.authenticatedUser;
      var self = this;

      function authSuccessful(res) {
        authToken.setToken(res.token);

        self.authenticatedUser = res.user.email;
        console.log('res', self.authenticatedUser);

        var message =  res.user.email + '!';
        alert('success', 'Welcome ', message);

        $state.go('home');
      }






      this.login = function (email, password) {
        return $http.post(ENDPOINT_URI + '/login', {
          email: email,
          password: password
        }).success(authSuccessful);
      };

      this.logout = function () {
        authToken.removeToken();
      };

      this.register = function (email, password) {
        return $http.post(ENDPOINT_URI + '/register', {
          email: email,
          password: password
        }).success(authSuccessful);
      }


    });
})();