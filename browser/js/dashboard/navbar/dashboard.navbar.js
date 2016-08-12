app.directive('dashboardnav', function ($rootScope, $state, UserFactory, ConstFactory) {
/*
running code before Compilation : use controller
running code after Compilation : use Link
Angular convention : write business logic in controller and DOM manipulation in link.
*/
 return {
        restrict: 'E',
        // Don't restrict the scope; it needs to acfcess the parent scope
        templateUrl: 'js/dashboard/navbar/dashboard.navbar.html',
        link: function (scope) {

            scope.update = function() {
                if (scope.selectedDb) {
                    scope.dashName = scope.selectedDb.name;
                    scope.dashDesc = scope.selectedDb.description;
                    $rootScope.$broadcast(ConstFactory.EVENT_DB_SELECTED, scope.selectedDb);
                }
            };

            scope.toggleEdit = function(){
                scope.editable = !scope.editable;
                // scope.editable is on the parent scope
            };

            // Fetch a list of dashboards for this user
            UserFactory.getDashboards()
            .then(function(dbs) {
                scope.dashboards = dbs;
                if (dbs.length > 0)
                    scope.selectedDb = dbs[0];
                scope.update();
            })
        }
    }
});
