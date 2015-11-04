'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', ['ui.router','ngResource','btford.socket-io'])
  .constant('ENDPOINT_URI', 'http://localhost:3000');

angular.module('frontendApp').config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('contact', {
      url: "/contact",
      templateUrl: "views/contact.html"
    }),
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "views/home.html"
      }),
    $stateProvider
  .state('chatDetail', {
    url: '/home/:nameRoom',
    templateUrl: 'views/chat.html',
    controller:'ChatdetailctrlCtrl'
  }),
    $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'LoginCtrl'
  })

});
