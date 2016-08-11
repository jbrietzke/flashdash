app.controller('homeCtrl', ['$scope', '$timeout', 'sampleWidgetFactory', 
    function($scope, $timeout, sampleWidgetFactory) {
      $scope.gridsterOptions = {
        margins: [20, 20],
        columns: 16,
        // mobileBreakPoint: 1000,
        // mobileModeEnabled: true,
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
      //console.log(generator)
      $scope.dashboard = {
        widgets: sampleWidgetFactory
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
          sizeX: 4,
          sizeY: 4
        });
      };
    }
  ]);