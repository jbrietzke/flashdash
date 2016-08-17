app.controller('WidgetCtrl', ['$scope', '$uibModal',
	function($scope, $uibModal) {

	  $scope.remove = function(widget) {
	    $scope.dashboard.charts.splice($scope.dashboard.charts.indexOf(widget), 1);
	  };

	  $scope.openSettings = function(widget) {
	    $uibModal.open({
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

}
  ])