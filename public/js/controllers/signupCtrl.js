app.controller('signupCtrl', function($scope, dataService, $state) {

    $scope.test = 'test'

    $scope.register = function(newUser) {
        console.log(newUser);
        dataService.addUser(newUser).then(function(response) {
            console.log(response);
            $scope.user = response;
            $state.go('dashboard')
        })

        // $scope.form = '';
    };

    $scope.login = function(userInfo) {
        dataService.loginUser(userInfo).then(function(response) {
            console.log(response);
            $state.go('dashboard')
        })

    }

});
