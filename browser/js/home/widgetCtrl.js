app.controller('CustomWidgetCtrl', ['$scope', '$modal',
	function($scope, $modal) {

	  $scope.remove = function(widget) {
	    console.log('clicked')
	    $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
	  };

	  $scope.openSettings = function(widget) {
	    $modal.open({
	      scope: $scope,
	      templateUrl: '/js/home/graphSettings.html',
	      controller: 'WidgetSettingsCtrl',
	      resolve: {
	        widget: function() {
	          return widget;
	        }
	      }
	    });
	  };

}
  ])