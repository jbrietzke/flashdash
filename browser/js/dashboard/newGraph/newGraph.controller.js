app.controller('newGraphCtrl', function ($scope, $q, WidgetSettingsFactory, GeneratorFactory, validGraphFactory, DashboardFactory, $uibModalInstance, $interval, $timeout) {
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
    	let numberOfCharts = addWidgetToDashboard()
        
        let widget = $scope.dashboard.charts[numberOfCharts -1]
  		widget = customExtend(widget, $scope.form);
        
        WidgetSettingsFactory.newSetKeys($scope.form.dataSource, widget)
        .then(function (dataArr) {

        	widget.chart.api.updateWithData(dataArr[0])
        	widget.chart.api.updateWithOptions(returnGraphOptions($scope.form.type, $scope.form.xparam.name, $scope.form.yparam.name));
            let time = Number($scope.form.refreshInterval) * 1000
            if(!time){
                time = 10000000;
            }else if( time< 3000){
                time = 3000
            }
            widget.refreshInterval = time;
            return widget;
		})
        .then(function(widget){
            $interval(function(){
                return WidgetSettingsFactory.newSetKeys($scope.form.dataSource)
                .then(function(res){
                    widget.chart.data = res[0];
                    $scope.dataKeys = res[1];
                })

            }, widget.refreshInterval);
        });

		$uibModalInstance.dismiss();

    }

    function returnGraphOptions (type, xparam, yparam) {
    	return GeneratorFactory[type].options(xparam, yparam)
    }

    function addWidgetToDashboard () {
    	return $scope.dashboard.charts.push({
	        name: "New Widget",
	        sizeX: 4,
	        sizeY: 4
        })
    }

    function customExtend (widget, form) {
    	angular.extend(widget, form);
    	if(widget.xparam) widget.xparam = widget.xparam.name;
    	if(widget.yparam) widget.yparam = widget.yparam.name;
    	return widget;
    }
})
