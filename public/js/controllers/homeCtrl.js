app.controller('homeCtrl', function($scope, dataService) {

    $scope.test = 'test';


    $scope.getData = function() {
        dataService.getPosts().then(function(response) {
            $scope.posts = response
        })
    }();

    $scope.new = function() {
        console.log('You clicked NEWWWW');
    }

    $scope.used = function() {
        console.log('You clicked useddddddDDDD');
    }

    // $scope.high = function() {
    //     $scope.reverse = true;
    //     $scope.predicate = 'price';
    //
    //     console.log("you clicked meee high");
    // }
    //
    // $scope.low = function() {
    //     $scope.reverse = false;
    //     $scope.predicate = 'price';
    //     console.log("you clicked meee low");
    // }

    $scope.reset = function() {
        $scope.predicate = '!price';
        $scope.stuff = '';
        $scope.nu = '';
        $scope.high = '';
        $scope.low = '';
    }

    $scope.apply = function (ca, price) {
        console.log(ca, price);
        if($scope.high) $scope.reverse = true;
        if($scope.low) $scope.reverse = false;
        console.log($scope.reverse)
        $scope.stuff = ca;
        $scope.predicate = 'price';

    }


});
