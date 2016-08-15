app.controller('userCtrl', function ($scope, userFactory, $state, AuthService) {

  AuthService.getLoggedInUser()
  .then(function(res){
    $scope.user = res;
    $scope.id = res.id
  })
  .then(function(){
    return userFactory.getAllDashboards($scope.id)
  .then(function(data){
    $scope.allDashBoards = data;
  })
  })


$scope.data = {'firstName':'Ray'};
  $scope.content = {'name' : 'practiceDash', 'description': 'A practice for perfection'};


	$scope.update = function(id, userData){
		return userFactory.updateUser(id, userData);
	}
	$scope.delete = function(id){
		 return userFactory.deleteUser(id);
	}
	$scope.addDashboard = function(id, content){
    	return userFactory.addDashboard(id, content)
    	 .then(function(){
    		$state.reload()
    	})
  	}

	$scope.updateDashboard = function(id, dashId, content){
  		return userFactory.updateDashboard(id, dashId, content)
  		 .then(function(){
    		$state.reload()
    	})
  	}

	$scope.deleteDashboard = function(id, dashId){
    	return userFactory.deleteDashboard(id, dashId)
    	.then(function(){
    		$state.reload()
    	})
  	}

  $scope.userEditingMode = false;

  $scope.toggleEditingMode = function(){
    $scope.userEditingMode = !$scope.userEditingMode;
  }


});
