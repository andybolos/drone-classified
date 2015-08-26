app.controller('dashboardCtrl', function($scope, dataService) {
    $scope.test = 'This is a test';


    $scope.addPost = function(newPost) {
        console.log(newPost);
        $scope.newPost = "";
        dataService.addPost(newPost);
        $scope.getData = function() {
            dataService.getData().then(function(response) {
                $scope.posts = response.data
            })
        };
        $scope.getData();
    };

    $scope.getData = function() {
        dataService.getData().then(function(response) {
            $scope.posts = response.data
            console.log(response.data);
        })
    };

    $scope.getData();

    $scope.deletePost = function(postId) {
        console.log(postId);
        dataService.deletePost(postId);
        $scope.getData();
    }

    $scope.getUsers = function() {
        dataService.getUsers().then(function(response) {
            console.log(response.data);
            $scope.users = response.data;
        })
    }();

});
