app.directive('gridboxdiv', ['$rootScope', '$state', 'UserFactory', 'ConstFactory',
    function ($rootScope, $state, UserFactory, ConstFactory) {
/*
running code before Compilation : use controller
running code after Compilation : use Link
Angular convention : write business logic in controller and DOM manipulation in link.
*/
 return {
        restrict: 'E',
        // Don't restrict the scope; it needs to acfcess the parent scope
        templateUrl: 'js/home/home.html',
        controller : 'homeCtrl'
    }
}]);



