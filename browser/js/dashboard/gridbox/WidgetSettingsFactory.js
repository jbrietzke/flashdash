app.factory('WidgetSettingsFactory', function($interval, DashboardFactory){
  var factory = {};

  factory.newSetKeys = function(dataSource){
    return DashboardFactory.getDataSource(dataSource)
      .then(function(data){
        var realData = factory.findDataToGraph(data);
        if (!realData) {
          realData = [data];
        }
        var dataInNVD3Format = [{
          values:realData,
          key: "this works",
          color: '#ff7f0e'
        }];
        return [dataInNVD3Format,Object.keys(realData[0])]
      })
  }

  factory.findDataToGraph = function(obj){
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


  return factory;
})
