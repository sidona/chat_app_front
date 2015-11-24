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
    .service('auth', function auth($http, ENDPOINT_URI, authToken, $state, alert, $window) {

      this.authenticatedUser = '';
      var self = this;
      this.authenticatedUserName = '';
      this.authenticatedUserLocation = '';

      function authSuccessful(res) {
        authToken.setToken(res.token);
        $window.localStorage.setItem('user', res.user.email);
        self.authenticatedUser = res.user.email;
        console.log('res', self.authenticatedUser);
        console.log(res.user);

        self.authenticatedUserName = res.user.profile.name;
        self.authenticatedUserLocation = res.user.profile.location;
        console.log(self.authenticatedUserName);
        var message = res.user.email + '!';
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
        $window.localStorage.removeItem('user');
      };

      this.register = function (email, password) {
        return $http.post(ENDPOINT_URI + '/register', {
          email: email,
          password: password
        }).success(authSuccessful);
      }

    });
})();
