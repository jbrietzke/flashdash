app.factory('userFactory', function($http){
	var obj = {};

	obj.updateUser = function(id, data){
		return $http.put('/api/users/' + id, data)
			.then(function(user){
				return user.data
			})
	}

	obj.deleteUser = function(id){
		return $http.delete('/api/users/' + id)
		.then(function(user){
			return user.data
		})
	}

  obj.addDashboard = function(id, content){
    return $http.post('api/users/' + id + '/dashboard', content)
    .then(res => res.data);
  }

  obj.deleteDashboard = function(id, dashId){
    return $http.delete('api/users/' + id + '/dashboard/' + dashId)
    .then(res => res.data);
  }

	return obj
})
