app.factory('dashboardFactory', function($http, $q){
    var obj = {};

    obj.getDataSource = function(link){
        if(!link){
            return $q.when(null);
        }
        return $http.get(link)
        .then(res => res.data)
    }

    obj.saveLayout = function (dashboardId, layout) {
    	let obj = layout.map(function (e) {
    		return {
    			dataSourceUrl: e.dataSource || 'http://www.google.com',
    			refreshInterval: e.refreshInterval || 0,
    			chartType: e.type,
    			xsize: e.sizeX,
    			ysize: e.sizeY, 
    			xloc: e.col,
    			yloc: e.row,
    			color: e.color || '#0000ff',
    			dashboardId: dashboardId
    		}
    	})
    	return $http.put('/api/dashboards/' + dashboardId, obj)
    }
    return obj;
});
