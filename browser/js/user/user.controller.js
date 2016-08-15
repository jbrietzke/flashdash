app.controller('userCtrl', function ($scope, userFactory) {

	$scope.id = 1;
	$scope.data = {'firstName':'Ray'};
  $scope.content = {'name' : 'practiceDash', 'description': 'A practice for perfection'};
  $scope.dashId = 1;

	$scope.update = function(id, userData){
		return userFactory.updateUser(id, userData)
	}
	$scope.delete = function(id){
		 return userFactory.deleteUser(id)
	}
	$scope.addDashboard = function(id, content){
    	return userFactory.addDashboard(id, content)
  	}

	$scope.updateDashboard = function(id, dashId, content){
  		return userFactory.updateDashboard(id, dashId, content)
  	}

	$scope.deleteDashboard = function(id, dashId){
    	return userFactory.deleteDashboard(id, dashId);
  	}

});
