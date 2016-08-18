app.controller('WidgetCtrl', ['$scope', '$modal', '$controller', '$rootScope',
	function($scope, $modal, $controller, $rootScope) {

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

  $scope.showMe = function(widget){
    console.log(widget);
    $modal.open({
        scope: $scope,
        templateUrl: '/js/dashboard/gridbox/widgetActive.html',
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
