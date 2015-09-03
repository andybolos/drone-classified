var app = angular.module('uav-c', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
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
        .state('details', {
            url: '/details',
            templateUrl: '../views/details.html',
            controller: 'detailsCtrl'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '../views/dashboard.html',
            controller: 'dashboardCtrl',
            resolve: {
                currentUser: function(dataService) {
                    return dataService.getUser();
                }
            }
        })

//         var interceptor = ['$location', '$q', '$injector', function($location, $q, $injector) {
//     function success(response) {
//         return response;
//     }
//
//     function error(response) {
//
//         if(response.status === 401) {
//             $injector.get('$state').transitionTo('signup');
//             return $q.reject(response);
//         }
//         else {
//             return $q.reject(response);
//         }
//     }
//
//     return function(promise) {
//         return promise.then(success, error);
//     }
// }];
//
// $httpProvider.responseInterceptors.push(interceptor);

});
