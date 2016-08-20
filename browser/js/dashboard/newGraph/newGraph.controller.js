app.controller('newGraphCtrl', function ($scope, GeneratorFactory, validGraphFactory, DashboardFactory, $uibModalInstance) {
	$scope.getKeysAndTypes = function () {
		DashboardFactory.getDataSource($scope.form.dataSource)
		.then(DashboardFactory.findDataToGraph)
		.then(validGraphFactory.getKeysAndTypes)
		.then(function (keysAndTypes) {
			$scope.keyTypePairs = keysAndTypes
		})
	};

    $scope.dismiss = function() {
        $uibModalInstance.dismiss();
    };

    $scope.showValidGraphs = function () {
    	let xtype = $scope.form.xparam.type
    	if(!!$scope.form.yparam) {
    		var ytype = $scope.form.yparam.type
    	}
    	$scope.validGraphTypes = validGraphFactory.getValidGraphTypes (xtype, ytype)
    }

    $scope.build = function () {
    	let numberOfCharts = $scope.dashboard.charts.push({
	        name: "New Widget",
	        sizeX: 4,
	        sizeY: 4
        });
        let widget = $scope.dashboard.charts[numberOfCharts -1]
        angular.extend(widget, $scope.form)
        console.log(widget)
        widget.chart.options = GeneratorFactory
    }
})