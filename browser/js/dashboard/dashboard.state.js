
app.config(function ($stateProvider) {
    $stateProvider.state('dashboard', {
        url: '/dash',
        template: '<gridboxdiv></gridboxdiv>',
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