app.controller('WidgetCtrl', ['$scope', '$modal', '$controller', '$rootScope', 'WidgetSettingsFactory', 'DashboardFactory', '$interval',
	function($scope, $modal, $controller, $rootScope, WidgetSettingsFactory, DashboardFactory, $interval) {

	  $scope.remove = function(widget) {
	    $scope.dashboard.charts.splice($scope.dashboard.charts.indexOf(widget), 1);
	  };

	  $scope.openSettings = function(widget) {
	    $modal.open({
	      scope: $scope,
	      templateUrl: '/js/dashboard/gridbox/widgetSettings.html',
	      controller: 'WidgetSettingsCtrl',
	      resolve: {
	        widget: function() {
	          return widget;
	        }
	      }
	    })
	  };

  $scope.updateData = function(widget){
    if (widget.refreshInterval > 0) {
        $interval(function(){
          return WidgetSettingsFactory.newSetKeys(widget.dataSource)
          .then(function(res){
            widget.chart.data = res[0]
          })
        }, widget.refreshInterval + 4000);
      }
  };
}
  ])
