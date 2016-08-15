app.controller('userCtrl', function ($scope, userFactory) {

	$scope.id = 1
	$scope.data = {'firstName':'Ray'}

	$scope.update = function(id, data){
		return userFactory.updateUser(id, data)
	}
	$scope.delete = function(id){
		 return userFactory.deleteUser(id)
	}



});