app.controller('userCtrl', function ($uibModal, $scope, userFactory, $state, AuthService) {

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
  
	$scope.update = function(id, userData){
    $scope.userEditingMode = false;
		return userFactory.updateUser(id, userData);
	}
	$scope.delete = function(id){
		 return userFactory.deleteUser(id);
	}
	$scope.modDashboard = function(id, content){
    $uibModal.open({
      scope: $scope,
      templateUrl: '/js/dashboard/newDashboard/newDashboard.html',
      controller: 'newDashboardCtrl',
      resolve: {
        content: function() {return content}
      }
    })
  }

	$scope.deleteDashboard = function(id, dashId){
    	return userFactory.deleteDashboard(id, dashId)
    	.then(function(){
    		$state.reload()
    	})
  	}

  $scope.userEditingMode = false;
  $scope.dashboardEditingMode = false;

  $scope.toggleDashboardEditingMode = function(){
  	$scope.dashboardEditingMode = !$scope.dashboardEditingMode;
    console.log("Toggling db to ", $scope.dashboardEditingMode)
  }

  $scope.toggleUserEditingMode = function(){
    $scope.userEditingMode = !$scope.userEditingMode;
     console.log("Toggling us to ", $scope.userEditingMode)
 }


});
