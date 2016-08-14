app.factory('dashboardFactory', function($http, $q){
    var obj = {};
    let getData = (res => res.data);
    obj.getDataSource = function(link){
        if(!link){
            return $q.when(null);
        }
        return $http.get(link)
        .then(getData)
    }

    obj.getDashboard = function (dashboardId) {
        return $http.get('/api/dashboards/' + dashboardId)
        .then(getData)
    }

    obj.saveLayout = function (dashboardId, layout) {
    	let obj = layout.map(function (e) {
    		return {
    			dataSourceUrl: e.dataSource || 'http://www.google.com', //this needs to change at some point
    			refreshInterval: e.refreshInterval || 1000,
    			type: e.type,
    			sizeX: e.sizeX,
    			sizeY: e.sizeY, 
    			col: e.col,
    			row: e.row,
    			color: e.color || '#0000ff',
    			dashboardId: dashboardId
    		}
    	})
    	return $http.put('/api/dashboards/' + dashboardId, obj)
        .then(getData)
    }
    return obj;
});
