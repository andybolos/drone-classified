app.controller('dashboardCtrl', function($scope, dataService, currentUser) {
    $scope.test = 'This is a test';
    $scope.user = currentUser;
    var userId = currentUser._id;
    // var now = moment();
    // console.log(now);
    console.log(userId);

    var getUserPosts = function(){
        dataService.getUserPosts(userId).then(function(response) {
            console.log(response);
            $scope.posts = response;
        });
    };
    getUserPosts();

    $scope.addUserPost = function(newPost) {
        $scope.newPost = "";
        newPost.user = userId;
        newPost.createdAt = moment();
        console.log(newPost);
        dataService.addPost(newPost).then(function(response) {

            console.log(response);
        });
        getUserPosts();
        // $scope.getUserPosts = function() {
            // })
        // $scope.getUserPosts();
    };

    $scope.updateUserPost = function(postId, postEdit) {
        console.log(postEdit, 'userId', postId);
        dataService.updateUserPost(postId, postEdit).then(function(response) {
        })
    }

    $scope.getUserPosts = function(userId) {
        dataService.getUserPosts(userId).then(function(response) {
            $scope.posts = response.data;
            console.log(response.data);
        })
    };

    $scope.deleteUserPost = function(postId) {
        console.log(postId);
        dataService.deletePost(postId);
        getUserPosts();
    }



});
