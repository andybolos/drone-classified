app.service('dataService', function($http, $q, $state, $location) {

    this.getPosts = function() {
        var dfd = $q.defer();
        $http ({
            method: 'GET',
            url: '/api/post'
        }).then(function(response) {
            dfd.resolve(response)
        }), function(error) {
            console.log('Error', error);
        }
        return  dfd.promise;
    };

    this.getUserPosts = function(userId) {
        var dfd = $q.defer();
        $http ({
            method: 'GET',
            url: '/api/post?user=' + userId
        }).then(function(response) {
            dfd.resolve(response)
        }), function(error) {
            console.log('Error', error);
        }
        return  dfd.promise;
    };

    this.addPost = function(newPost) {
        console.log('newPost', newPost);
        var dfd = $q.defer();
        $http({
            method: 'POST',
            url: '/api/post',
            data: newPost
        }).then(function(response) {
            console.log(response.data);
            dfd.resolve(response.data)
        })
        return dfd.promise;
    };

    this.updateUserPost = function(id, editPost) {
        var dfd = $q.defer();
        $http({
            method: 'PUT',
            url: '/api/post/' + id,
            data: editPost
        }).then(function(response) {
            console.log(response);
            dfd.resolve
        })
        return dfd.promise;
    }

    this.deletePost = function(postId) {
        var dfd = $q.defer();
        $http({
            method: 'DELETE',
            url: '/api/post/' + postId
        }).then(function(response) {
            console.log(response);
            dfd.resolve(response)
        })
        return dfd.promise;
    }

    this.addUser = function(newUser) {
        var dfd = $q.defer();
        $http({
            method: 'POST',
            url: '/api/register',
            data: newUser
        }).then(function(response) {
            console.log(response);
            dfd.resolve(response)
        })
        return dfd.promise;
    }

    this.getUser = function() {
        var dfd = $q.defer();
        $http ({
            method: 'GET',
            url: '/api/user'
        }).then(function(response) {
            dfd.resolve(response.data[0])
            console.log(response.data);
        }, function(error) {
            $state.go('home');
            console.error('Error bro', error);
        })
        return  dfd.promise;
    };

    // this.getUser = function() {
    //     var deferred = $q.defer();
    //
    //     $http.get('/api/user')
    //     .success(function (response) {
    //         deferred.resolve(response[0]);
    //         console.log(response);
    //     })
    //     .error(function (err) {
    //         console.error(err);
    //         $state.go('home');
    //     })
    //
    //     return deferred.promise;
    // };

    this.loginUser = function(userInfo) {
        var dfd = $q.defer();
        $http ({
            method: 'POST',
            url: '/api/login',
            data: userInfo
        }).then(function (data, status) {
          console.log('Successful login.');
          console.log('data = ' + data);
          console.log('status = ' + status);
          $state.go('dashboard'); //
          dfd.resolve(data)
      })
    //     .error(function (data) {
    //       console.log('Error: ' + data);
    //       $state.go('signup');
    //   });
      return dfd.promise;
    };


// before I broke it
    // this.loginUser = function(userInfo) {
    //     var dfd = $q.defer();
    //     $http ({
    //         method: 'POST',
    //         url: '/api/login',
    //         data: userInfo
    //     }).then(function(response) {
    //         console.log(response);
    //
    //         dfd.resolve(response)
    //     }), function(error) {
    //         console.log('Error', error);
    //     }
    //     return  dfd.promise;
    // };

});
