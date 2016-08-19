app.config(function ($stateProvider) {

    // Register our *about* state.
    $stateProvider.state('home', {
        url: '/home',
        controller: 'AboutController',
        templateUrl: 'js/home/home.html'
    });

});