app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller : 'homeCtrl',
        resolve: {
        	dashboard : function (dashboardFactory) {
        		return dashboardFactory.getDashboard(1) //right now always fetching the first dashboard 
        		//- will be changed once we have the ability to save new dashboards to users
        	}
        }
    });
});
