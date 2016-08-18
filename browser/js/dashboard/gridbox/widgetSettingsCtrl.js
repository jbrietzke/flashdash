  app.controller('WidgetSettingsCtrl', ['$scope', 'DashboardFactory', '$timeout', '$rootScope', '$modalInstance', 'widget', 'GeneratorFactory', '$interval', 'WidgetSettingsFactory',
    function($scope, DashboardFactory, $timeout, $rootScope, $modalInstance, widget, GeneratorFactory, $interval,WidgetSettingsFactory) {
      console.log('this is a widget', widget);

      $scope.widget = widget;
      if(widget.chart.data && widget.chart.data[0].values.length){
        $scope.dataKeys = Object.keys(widget.chart.data[0].values[0]);
      }

      $scope.widgetTypes = Object.keys(GeneratorFactory);

      $scope.form = {
        name: widget.name,
        sizeX: widget.sizeX,
        sizeY: widget.sizeY,
        col: widget.col,
        row: widget.row,
        type: widget.type,
        dataSource: widget.dataSource,
        yparam: widget.yparam,
        xparam: widget.xparam,
      };


    let dataInNVD3Format;
     $scope.setKeys = function(dataSource){
        return WidgetSettingsFactory.newSetKeys(dataSource)
        .then(function(res){
          widget.chart.data = res[0];
          $scope.dataKeys = res[1];
        })
     }
     $scope.setKeys($scope.form.dataSource);

  function findDataToGraph(obj){
    if(Array.isArray(obj)){
      return obj;
    }else if(typeof(obj) === 'object'){
      var x;
      for(var key in obj){
       x = findDataToGraph(obj[key]);
       if(x){
        return x;
       }
      }
    }
  }

      $scope.dismiss = function() {
        $modalInstance.dismiss();
      };

      $scope.remove = function() {
        $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
        $modalInstance.close();
      };

      $scope.submit = function() {
        angular.extend(widget, $scope.form);
        //update with new options
        if (widget.type) {
          widget.chart.options = GeneratorFactory[widget.type].options(widget.xparam, widget.yparam);
        }
        $modalInstance.close(widget);


        $timeout(function(){
          widget.chart.api.refresh();
        },0)

        //update new chart
        };


        $scope.emitActive = function(widget){
          console.log('emitting');
          $scope.$emit('makingActive');
        };

      $scope.$on('makingActive', function(){
          console.log('listening');
          if (widget.refreshInterval !== 0) {
            $interval(function(){
              console.log('You are made', widget.name);
              $scope.setKeys();
            }, widget.refreshInterval)
          }
      });

      $scope.emitAllActive = function(){
        console.log('emittingAll');
        $scope.$emit('makingAllActive')
      };

      $scope.$on('makingAllActive', function(){
        DashboardFactory.getCharts(1)
        .then(function(dashes){
          dashes.forEach(function(e){
            if (e.refreshInterval > 0) {
              setTimeout(function(){
                $interval(function(){
                  console.log('You are made', widget.name);
                  $scope.setKeys();
                }, 2000)
              }, 3000)
            }
          })
        })
      })



    }
  ])
