app.factory('dashboardFactory', function($http, $q, generator){
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
        let dashboard;
        return $http.get('/api/dashboards/' + dashboardId)
        .then(getData)
        .then(function (_dashboard) {
            dashboard = _dashboard
            let promises = []
            dashboard.charts.forEach(function (e) {
                let prom = obj.getDataSource(e.dataSource);
                promises.push(prom);
                prom
                .then(function (sourceData) {
                    e.chart = {
                        options: generator[e.type].options(e.xparam, e.yparam),
                        data: [{
                            values:sourceData,
                            key: "this works",
                            color: '#ff7f0e'
                        }],
                        api: {}
                    }
                })
            })
            return Promise.all(promises)
        })
        .then(function(retstuff) {
            return dashboard
        })
    }

    obj.saveLayout = function (dashboardId, layout) {
        console.log(layout)
    	let obj = layout.map(function (e) {
    		return {
                name: e.name,
    			dataSource: e.dataSource || 'http://www.google.com', //this needs to change at some point
    			refreshInterval: e.refreshInterval || 1000,
    			type: e.type,
    			sizeX: e.sizeX,
    			sizeY: e.sizeY, 
    			col: e.col,
    			row: e.row,
                color: e.color || '#0000ff',
                xparam: e.xparam, 
    			dashboardId: dashboardId,
                yparam: e.yparam
    		}
    	})
    	return $http.put('/api/dashboards/' + dashboardId, obj)
        .then(getData)
    }
    return obj;
});
