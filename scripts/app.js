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
  .module('frontendApp', ['ui.router', 'ngResource', 'btford.socket-io', 'ngAnimate', 'satellizer','ngStorage','ngFileUpload'])
angular
  .module('frontendApp').constant('ENDPOINT_URI', 'http://localhost:3000');

angular
  .module('frontendApp').config(function ($stateProvider, $urlRouterProvider, $httpProvider, $authProvider, ENDPOINT_URI) {


  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/home.html"

    }),
    $stateProvider
      .state('addPost', {
        url: "/home/addPost",
        templateUrl: "views/addPost.html"

      }),

  $stateProvider
    .state('contact', {
      url: "/contact",
      templateUrl: "views/contact.html"
    }),
    $stateProvider
      .state('chat', {
        url: "/home/chat",
        templateUrl: "views/chats.html"
      }),
    $stateProvider
      .state('postDetail', {
        url: "/home/:id",
        templateUrl: "views/postDetail.html"
      }),
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: '/views/register.html',
        controller: 'RegisterCtrl'
      }),
    $stateProvider
      .state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
      }),
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: '/views/login.html',
        controller: 'LoginCtrl'
      })
  $stateProvider
    .state('editProfile', {
      url: '/editProfile',
      templateUrl: '/views/editProfile.html',
      controller: 'EditprofileCtrl'
    })
  $stateProvider
    .state('chatDetail', {
      url: '/home/chat/:nameRoom',
      templateUrl: 'views/chat.html',
      controller: 'ChatdetailctrlCtrl'
    })

  $httpProvider.interceptors.push('authInterceptor');
  $authProvider.loginUrl = ENDPOINT_URI + '/login';
  $authProvider.signupUrl = ENDPOINT_URI + '/register';

})



