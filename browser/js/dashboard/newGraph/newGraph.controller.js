app.controller('newGraphCtrl', function ($scope, validGraphFactory, DashboardFactory) {
	$scope.getKeysAndTypes = function () {
		DashboardFactory.getDataSource($scope.form.dataSource)
		.then(DashboardFactory.findDataToGraph)
		.then(validGraphFactory.getKeysAndTypes)
		.then(function (keysAndTypes) {
			$scope.keyTypePairs = keysAndTypes
		})
		

	} 
})