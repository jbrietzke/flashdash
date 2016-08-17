
app.config(function ($stateProvider) {
    $stateProvider.state('dashboard', {
        url: '/dash',
        templateUrl: 'js/dashboard/dashboard.html',
        controller: 'dashboardCtrl',
        resolve: { 
            dashList: ['UserFactory', function(UserFactory) {
                return UserFactory.getDashboards()
            }]
        }
    });
});