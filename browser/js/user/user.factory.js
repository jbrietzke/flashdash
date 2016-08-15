app.factory('userFactory', function($http){
	var obj = {};

	obj.updateUser = function(id, body){
		return $http.put('/api/users/' + id, body)
			.then(function(user){
				console.log('hit the update route')
				return user.data
			})
	}

	obj.deleteUser = function(id){
		return $http.delete('/api/users' + id)
		.then(function(user){
			console.log('hit the delete route')
			return user.data
		})
	}


	return obj
})