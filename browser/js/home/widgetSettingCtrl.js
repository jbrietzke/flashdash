  app.controller('WidgetSettingsCtrl', ['$scope', 'dashboardFactory', '$timeout', '$rootScope', '$modalInstance', 'widget', 'generator',
    function($scope, dashboardFactory, $timeout, $rootScope, $modalInstance, widget, generator) {
      $scope.widget = widget;

      $scope.widgetTypes = Object.keys(generator);

      $scope.form = {
        name: widget.name,
        sizeX: widget.sizeX,
        sizeY: widget.sizeY,
        col: widget.col,
        row: widget.row,
        type: widget.type,
        dataSource: widget.dataSource,
        yAxis: widget.yAxis,
        yAxis: widget.xAxis
      };

     $scope.setKeys = function(){
      dashboardFactory.getDataSource($scope.form.dataSource)
      .then(function(data){
         $scope.data = data;
         widget.chart.data = [{
            values:data,
            key: 'this works',
            color: '#ff7f0e'
          }]
      });
     }


      $scope.sizeOptions = [{
        id: '1',
        name: '1'
      }, {
        id: '2',
        name: '2'
      }, {
        id: '3',
        name: '3'
      }, {
        id: '4',
        name: '4'
      }];

      $scope.dismiss = function() {
        $modalInstance.dismiss();
      };

      $scope.remove = function() {
        $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
        $modalInstance.close();
      };

      $scope.submit = function() {
        angular.extend(widget, $scope.form);

        //update with new options and data
        if (widget.type) {
          widget.chart.options = generator[widget.type].options(widget.xAxis, widget.yAxis);
          // widget.chart.data = generator[widget.type].data();
        }
        $modalInstance.close(widget);

        //update new chart
        $timeout(function(){
          widget.chart.api.update();
        },600)
      };

    }
  ])
