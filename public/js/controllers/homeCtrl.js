app.controller('homeCtrl', function($scope, dataService) {

    $scope.test = 'test';


    $scope.getData = function() {
        dataService.getPosts().then(function(response) {
            console.log(response.data);
            $scope.posts = response.data
        })
    }();

    $scope.new = function() {
        console.log('You clicked NEWWWW');
    }

    $scope.used = function() {
        console.log('You clicked useddddddDDDD');
    }

    $scope.high = function() {
        $scope.reverse = true;
        $scope.predicate = 'price';

        console.log("you clicked meee high");
    }

    $scope.low = function() {
        $scope.reverse = false;
        $scope.predicate = 'price';
        console.log("you clicked meee low");
    }

    $scope.reset = function() {
        $scope.predicate = '!price';
        $scope.stuff = '';
        $scope.nu = '';
    }

    $scope.cat = function (param) {
        console.log(param);
        $scope.stuff = param
    }


});
