app.factory('userFactory', function($http, AuthService){
	var obj = {};

	obj.updateUser = function(id, data){
		return $http.put('/api/users/' + id, data)
			.then(res => res.data)
	}

	obj.deleteUser = function(id){
    AuthService.logout();
		return $http.delete('/api/users/' + id)
		.then(function(res){
      return res.data;
    })
	}

	obj.addDashboard = function(id, content){
    	return $http.post('api/users/' + id + '/dashboard', content)
    	.then(res => res.data);
  	}

	obj.updateDashboard = function(id, dashId, content){
  		return $http.put('api/users/' + id + '/dashboard/' + dashId, content)
  		.then(res =>res.data)
  	}

	obj.deleteDashboard = function(id, dashId){
    	return $http.delete('api/users/' + id + '/dashboard/' + dashId)
    	.then(res => res.data);
  	}

	return obj
})
