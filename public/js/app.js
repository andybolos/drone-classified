var app = angular.module('uav-c', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: '../views/home.html',
        controller: 'homeCtrl'
    })
    .when('/signup', {
        templateUrl: '../views/signup.html',
        controller: 'signupCtrl'
    })
    .when('/dashboard', {
        templateUrl: '../views/dashboard.html',
        controller: 'dashboardCtrl'
    })
    .otherwise({
        redirectTo: '/home'
    })


});
