'use strict'

app.factory('UserFactory', function($http, $log, AuthService) {
    let factory = {};
    let baseRoute = "/api/users/";

    factory.getDashboards = function(id) {
        return AuthService.getLoggedInUser()
        .then(function(user) {
            return $http.get(baseRoute + user.id + "/dashboards")
        })
        .then(x => x.data)
    }

return factory;
});
