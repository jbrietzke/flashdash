app.controller('newDashboardCtrl', function (userFactory,$state,$uibModalInstance, $scope, content) {
	
	// If passed an existing dashboard, set up to modify it
	if(content) {
		$scope.form={name: content.name, description: content.description};
		$scope.new = false;
	} else {
		$scope.new = true;
	}

	$scope.submit = function () {
		if(!content) {
			return userFactory.addDashboard($scope.id, $scope.form)
			.then(function(){
	    		$state.go('dashboard', {dashToLoad: $scope.form})
			})
		} else {
			userFactory.updateDashboard($scope.id, content.id, $scope.form)
			.then(function() {
				$state.go('user', {}, {reload: true})
			})
		}

	}

	$scope.dismiss = function() {
        $uibModalInstance.dismiss();
      };
})