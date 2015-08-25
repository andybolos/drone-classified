app.controller('signupCtrl', function($scope, dataService) {

    $scope.test = 'test'

    $scope.register = function(user) {
        console.log(user);
        dataService.addUser(user).then(function(response) {
            console.log(response);
        })
        // $scope.form = '';
    };

});
