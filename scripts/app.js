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
  .module('frontendApp', ['ui.router','ngResource','btford.socket-io','ngAnimate'])
  .constant('ENDPOINT_URI', 'http://localhost:3000');

angular.module('frontendApp').config(function ($stateProvider, $urlRouterProvider,$httpProvider) {

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
  .state('register',{
    url:'/register',
    templateUrl:'/views/register.html',
    controller:'RegisterCtrl'
  }),
    $stateProvider
    .state('logout',{
      url:'/logout',
      controller:'LogoutCtrl'
    }),
    $stateProvider
    .state('login',{
      url:'/login',
      templateUrl:'/views/login.html',
      controller:'LoginCtrl'
    })
    $stateProvider
  .state('chatDetail', {
    url: '/home/:nameRoom',
    templateUrl: 'views/chat.html',
    controller:'ChatdetailctrlCtrl'
  })
  $httpProvider.interceptors.push('authInterceptor');

});
