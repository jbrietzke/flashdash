app.controller('gridboxCtrl', ['$uibModal', '$scope', 'DashboardFactory','$timeout', 'WidgetSettingsFactory', '$rootScope', '$mdToast',
    function($uibModal, $scope, DashboardFactory, $timeout, WidgetSettingsFactory, $rootScope, $mdToast) {
      $scope.gridsterOptions = {
        margins: [25, 25],
        columns: 16,
        // mobileBreakPoint: 1000,
        // mobileModeEnabled: true,
        draggable: {
          enabled: $scope.editable,
          handle: 'h3'
        },
        resizable: {
          enabled: $scope.editable,
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

      // widget events
      $scope.events = {
        resize: function(e, scope){
          $timeout(function(){
            if (scope.api && scope.api.update) scope.api.update();
          },200)
        }
      };

      $scope.config = { visible: false, autorefresh: true };

      //make chart visible after grid have been created - TODO: change to grid.onload event
      $timeout(function(){
        $scope.config.visible = true;
      }, 200);

      //subscribe widget on window resize event
      angular.element(window).on('resize', function(e){
        $scope.$broadcast('resize');
      });

      // grid manipulation
      $scope.clear = function() {
        $scope.dashboard.charts = [];
      };

      $scope.addNewGraph = function () {
        $uibModal.open({
          scope: $scope,
          templateUrl: '/js/dashboard/newGraph/newGraph.html',
          controller: 'newGraphCtrl'
        })
      }

      $scope.saveLayout = function () {
        DashboardFactory.saveLayout($scope.dashboard.id, $scope.dashboard.charts)
      }

      $scope.toggleEditable = function(forced) {
        $scope.editable = (typeof forced === "undefined") ? ! $scope.editable : forced;
        $scope.gridsterOptions.draggable.enabled = $scope.editable;
        $scope.gridsterOptions.resizable.enabled = $scope.editable;
       }

      $scope.showToast1 = function() {
        $mdToast.show(
          $mdToast.simple()
            .textContent('Dashboard Saved!')
            .hideDelay(2000)
            .theme('success-toast')
            .position('bottom')
        );
      };
    },

  ]);
