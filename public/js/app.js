var app = angular.module('uav-c', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../views/home.html',
            controller: 'homeCtrl'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: '../views/signup.html',
            controller: 'signupCtrl'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '../views/dashboard.html',
            controller: 'dashboardCtrl'
        })

});
