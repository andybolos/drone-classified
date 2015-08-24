app.controller('homeCtrl', function($scope, dataService) {

    $scope.test = 'test';

    $scope.getData = function() {
        dataService.getData().then(function(response) {
            console.log(response.data);
            $scope.posts = response.data
        })
    }();


});
