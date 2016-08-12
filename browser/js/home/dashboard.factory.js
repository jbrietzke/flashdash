app.factory('dashboardFactory', function($http, $q){
    var obj = {};

    obj.getDataSource = function(link){
        if(!link){
            return $q.when(null);
        }
        return $http.get(link)
        .then(res => res.data)
    }

    return obj;
})