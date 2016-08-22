app.factory('SignupFactory', function($http, $state) {
    let factory = {};

    factory.signup = function(data){
    	return $http.post('/api/users/signup', data)
    }

return factory;
});
