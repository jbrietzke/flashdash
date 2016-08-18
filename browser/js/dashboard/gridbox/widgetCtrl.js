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

  $scope.showMe2 = function(widget){
    console.log(widget);
    $modal.open({
        scope: $scope,
        templateUrl: '/js/dashboard/gridbox/widgetAllActive.html',
        controller: 'WidgetSettingsCtrl',
        resolve: {
          widget: function() {
            return widget;
          }
        }
      })
  };

  $scope.updateData = function(widget){
    console.log('updatingData', widget);
    if (widget.refreshInterval > 0) {
        $interval(function(){
          return WidgetSettingsFactory.newSetKeys(widget.dataSource)
          .then(function(res){
            widget.chart.data = res[0]
          })
        }, widget.refreshInterval + 4000);
      }
  };

  $scope.$on('updateYourself', function(x){
    console.log('I hear you', x);
  });


}
  ])
