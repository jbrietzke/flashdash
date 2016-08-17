app.controller('WidgetCtrl', ['$scope', '$modal',
	function($scope, $modal) {

	  $scope.remove = function(widget) {
	    $scope.dashboard.charts.splice($scope.dashboard.charts.indexOf(widget), 1);
	  };

	  $scope.openSettings = function(widget) {
	    $modal.open({
	      scope: $scope,
	      templateUrl: '/js/home/widgetSettings.html',
	      controller: 'WidgetSettingsCtrl',
	      resolve: {
	        widget: function() {
	          return widget;
	        }
	      }
	    })
	  };

}
  ])