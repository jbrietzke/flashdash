app.controller('userCtrl', function ($scope, userFactory) {

	$scope.id = 1;
	$scope.data = {'firstName':'Ray'};
  $scope.content = {'name' : 'practiceDash', 'description': 'A practice for perfection'};

	$scope.update = function(id, userData){
		return userFactory.updateUser(id, userData)
	}
	$scope.delete = function(id){
		 return userFactory.deleteUser(id)
	}

  $scope.addDashboard = function(id, content){
    return userFactory.addDashboard(id, content)
  }



});
