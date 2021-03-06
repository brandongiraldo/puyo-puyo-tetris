'use strict';

/**
 * @ngdoc overview
 * @name tetris
 * @author Brandon Joel Giraldo, Nicholas Tan
 * @description
 * 
 * Main module of the application. 
 *
 */
angular
  .module('tetrisApp', ['ngRoute', 'btford.socket-io'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "static/partials/board.html",
        controller: 'boardController'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
});