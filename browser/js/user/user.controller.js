app.controller('userCtrl', function ($scope, userFactory) {

	$scope.update = function(id, data){
		return userFactory.updateUser(id, data)
	}

	$scope.id = 1
	$scope.data = {'firstName':'Ray'}

});