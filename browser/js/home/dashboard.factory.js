app.factory('dashboardFactory', function($http, $q){
    var obj = {};

    obj.getDataSource = function(link){
        if(!link){
            return $q.when(null);
        }
        return $http.get(link)
        .then(res => res.data)
        .then(function (data) {
            return [{
            values:data,
            key: 'this works',
            color: '#ff7f0e'
            }]
        })
    }

    return obj;
})