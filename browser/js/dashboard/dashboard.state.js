
app.config(function ($stateProvider) {
    $stateProvider.state('dashboard', {
        url: '/dash',
        template: '<gridboxdiv></gridboxdiv>',
        controller: 'dashboardCtrl',
        resolve: { 
            dashList: ['userFactory', function(userFactory) {
                return userFactory.getAllDashboards()
            }]
        }
    });
});