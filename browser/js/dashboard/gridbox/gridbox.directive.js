app.directive('gridboxdiv', ['$rootScope', function ($rootScope) {
/*
running code before Compilation : use controller
running code after Compilation : use Link
Angular convention : write business logic in controller and DOM manipulation in link.
*/
 return {
        restrict: 'E',
        // Don't restrict the scope; it needs to access the parent scope
        templateUrl: 'js/dashboard/gridbox/gridbox.html',
        controller : 'gridboxCtrl'
    }
}]);



