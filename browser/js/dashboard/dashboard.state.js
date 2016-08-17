
app.config(function ($stateProvider) {
    $stateProvider.state('dashboard', {
        url: '/dash',
        templateUrl: 'js/dashboard/dashboard.html',
        controller: 'dashboardCtrl',
        params : {
            dashToLoad: null
        },
        resolve: { 
            dashList: ['userFactory', function(userFactory) {
                return userFactory.getAllDashboards()
            }]
        }
    });
});