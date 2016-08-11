app.controller('homeCtrl', ['$scope', '$timeout', 'generator',
    function($scope, $timeout, generator) {
      $scope.gridsterOptions = {
        margins: [20, 20],
        columns: 4,
        //mobileBreakPoint: 1000,
        mobileModeEnabled: false,
        draggable: {
          handle: 'h3'
        },
        resizable: {
          enabled: true,
          handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],

          // optional callback fired when resize is started
          start: function(event, $element, widget) {},

          // optional callback fired when item is resized,
          resize: function(event, $element, widget) {
            if (widget.chart.api) widget.chart.api.update();
          },

          // optional callback fired when item is finished resizing
          stop: function(event, $element, widget) {
            $timeout(function(){
              if (widget.chart.api) widget.chart.api.update();
            },400)
          }
        }
      };
      console.log(generator)
      $scope.dashboard = {
        widgets: [{
          col: 0,
          row: 0,
          sizeY: 1,
          sizeX: 2,
          name: "Line Chart Widget",
          type: 'lineChart',
          chart: {
            options: generator.lineChart.options(),
            data: generator.lineChart.data(),
            api: {}
          }
        }, {
          col: 2,
          row: 0,
          sizeY: 1,
          sizeX: 1,
          name: "Pie Chart Widget",
          type: 'pieChart',
          chart: {
            options: generator.pieChart.options(),
            data: generator.pieChart.data(),
            api: {}
          }
        }, {
          col: 3,
          row: 0,
          sizeY: 1,
          sizeX: 1,
          name: "Box Plot Widget",
          type: 'boxPlotChart',
          chart: {
            options: generator.boxPlotChart.options(),
            data: generator.boxPlotChart.data(),
            api: {}
          }
        }, {
          col: 0,
          row: 1,
          sizeY: 1,
          sizeX: 2,
          name: "Discrete Bar Chart Widget",
          type: 'discreteBarChart',
          chart: {
            options: generator.discreteBarChart.options(),
            data: generator.discreteBarChart.data(),
            api: {}
          }
        }, {
          col: 2,
          row: 1,
          sizeY: 1,
          sizeX: 2,
          name: "Stacked Area Chart Widget",
          type: 'stackedAreaChart',
          chart: {
            options: generator.stackedAreaChart.options(),
            data: generator.stackedAreaChart.data(),
            api: {}
          }
        }]
      };

      // widget events
      $scope.events = {
        resize: function(e, scope){
          $timeout(function(){
            if (scope.api && scope.api.update) scope.api.update();
          },200)
        }
      };

      $scope.config = { visible: false };

      //make chart visible after grid have been created
      $timeout(function(){
        $scope.config.visible = true;
      }, 200);

      //subscribe widget on window resize event
      angular.element(window).on('resize', function(e){
        $scope.$broadcast('resize');
      });

      // grid manipulation
      $scope.clear = function() {
        $scope.dashboard.widgets = [];
      };

      $scope.addWidget = function() {
        $scope.dashboard.widgets.push({
          name: "New Widget",
          sizeX: 1,
          sizeY: 1
        });
      };

      //$scope.dashboards = {
      //    '1': {
      //        id: '1',
      //        name: 'Home',
      //        widgets: [{
      //            col: 0,
      //            row: 0,
      //            sizeY: 1,
      //            sizeX: 1,
      //            name: "Widget 1"
      //        }, {
      //            col: 2,
      //            row: 1,
      //            sizeY: 1,
      //            sizeX: 1,
      //            name: "Widget 2"
      //        }]
      //    },
      //    '2': {
      //        id: '2',
      //        name: 'Other',
      //        widgets: [{
      //            col: 1,
      //            row: 1,
      //            sizeY: 1,
      //            sizeX: 2,
      //            name: "Other Widget 1"
      //        }, {
      //            col: 1,
      //            row: 3,
      //            sizeY: 1,
      //            sizeX: 1,
      //            name: "Other Widget 2"
      //        }]
      //    }
      //};
      //$scope.$watch('selectedDashboardId', function(newVal, oldVal) {
      //  if (newVal !== oldVal) {
      //    $scope.dashboard = $scope.dashboards[newVal];
      //  } else {
      //    $scope.dashboard = $scope.dashboards[1];
      //  }
      //});

      //// init dashboard
      //$scope.selectedDashboardId = '1';
    }
  ])

  .controller('CustomWidgetCtrl', ['$scope', '$modal',
    function($scope, $modal) {

      $scope.remove = function(widget) {
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

  .controller('WidgetSettingsCtrl', ['$scope', '$timeout', '$rootScope', '$modalInstance', 'widget', 'generator',
    function($scope, $timeout, $rootScope, $modalInstance, widget, generator) {
      $scope.widget = widget;
      $scope.widgetTypes = Object.keys(generator);

      $scope.form = {
        name: widget.name,
        sizeX: widget.sizeX,
        sizeY: widget.sizeY,
        col: widget.col,
        row: widget.row,
        type: widget.type
      };

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
          widget.chart.options = generator[widget.type].options();
          widget.chart.data = generator[widget.type].data();
        }
        $modalInstance.close(widget);

        //update new chart
        $timeout(function(){
          widget.chart.api.update();
        },600)
      };

    }
  ])
