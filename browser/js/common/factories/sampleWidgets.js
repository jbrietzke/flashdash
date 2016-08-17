app.factory('sampleWidgetFactory', ['generator', 'DashboardFactory', function (generator, DashboardFactory) {
	return [{
		col: 0,
		row: 0,
		sizeY: 4,
		sizeX: 8,
		dataSource: 'http://api.github.com/users/mosane/repos',
		name: "Line Chart Widget",
		type: 'lineChart',
		chart: {
			options: generator.lineChart.options(),
			data: DashboardFactory.getDataSource(this.dataSource),
			api: {}
		}
	}, {
		col: 0,
		row: 4,
		sizeY: 4,
		sizeX: 4,
		name: "Pie Chart Widget",
		type: 'pieChart',
		chart: {
			options: generator.pieChart.options(),
			data: generator.pieChart.data(),
			api: {}
		}
	}, {
		col: 12,
		row: 0,
		sizeY: 4,
		sizeX: 4,
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
		sizeY: 4,
		sizeX: 8,
		name: "Discrete Bar Chart Widget",
		type: 'discreteBarChart',
		chart: {
			options: generator.discreteBarChart.options(),
			data: generator.discreteBarChart.data(),
			api: {}
		}
	}, {
		col: 8,
		row: 1,
		sizeY: 4,
		sizeX: 8,
		name: "Stacked Area Chart Widget",
		type: 'stackedAreaChart',
		chart: {
			options: generator.stackedAreaChart.options(),
			data: generator.stackedAreaChart.data(),
			api: {}
		}
	}]
}]);