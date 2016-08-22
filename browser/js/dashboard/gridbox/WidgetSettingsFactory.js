app.factory('WidgetSettingsFactory', function(DashboardFactory){
  var factory = {};

  factory.newSetKeys = function(dataSource, widget){
    return DashboardFactory.getDataSource(dataSource)
      .then(function(data){
        let realData = DashboardFactory.findDataToGraph(data);
        let dataInCorrectFormat = DashboardFactory.setDataInCorrectFormat(realData, widget)
        return [dataInCorrectFormat,Object.keys(realData[0])]
      })
  }

//   factory.setDataInKVFormat = function (realData) {
//     return [{
//       values: realData,
//       key: null 
//       // this breaks previously hardcoded 'this works' string in the tooltip
//       // for key - the key should be the yparameter as 
//       // sepecified by the user - the new graph form or widget settings form 
//       // need to be modified to accomodate this
//       // also breaks color which was hardcoded - should also be user input
//     }]
//   }
  return factory;
})
