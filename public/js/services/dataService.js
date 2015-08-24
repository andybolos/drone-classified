app.service('dataService', function($http, $q) {

    this.getData = function() {
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

    this.addPost = function(newPost) {
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

});
