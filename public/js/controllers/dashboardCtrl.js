app.controller('dashboardCtrl', function($scope, dataService) {
    $scope.test = 'This is a test';


    $scope.addPost = function(newPost) {
        console.log(newPost);
        $scope.newPost = "";
        dataService.addPost(newPost);
        $scope.getPosts = function() {
            dataService.getPosts().then(function(response) {
                $scope.posts = response.data
            })
        };
        $scope.getPosts();
    };

    $scope.updatePost = function(id, postEdit) {
        console.log(id, postEdit);
        dataService.updatePost(id, postEdit).then(function(response) {
        })
    }

    $scope.getPosts = function() {
        dataService.getPosts().then(function(response) {
            $scope.posts = response.data
        })
    };

    $scope.getPosts();

    $scope.deletePost = function(postId) {
        console.log(postId);
        dataService.deletePost(postId);
        $scope.getData();
    }

    $scope.getUsers = function() {
        dataService.getUsers().then(function(response) {
            $scope.users = response.data;
        })
    }();

});
