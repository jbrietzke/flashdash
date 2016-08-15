app.config(function ($stateProvider) {
    $stateProvider.state('user', {
        url: '/myAccount',
        controller: 'userCtrl',
        templateUrl: 'js/user/user.html'
    });
});
