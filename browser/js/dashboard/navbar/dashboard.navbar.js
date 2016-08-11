app.directive('dashboardnav', function ($rootScope, AuthService, AUTH_EVENTS, $state) {
/*
running code before Compilation : use controller
running code after Compilation : use Link
Angular convention : write business logic in controller and DOM manipulation in link.
*/
 return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/dashboard/navbar/dashboard.navbar.html',
        link: function (scope) {

            scope.editable = false;

            scope.textEdit = 'Editing Disabled'

            scope.dashboards = [
                {name: "bar one", data: "trash"},
                {name: "bar two", data: "trash"},
                {name: "sports bar", data: "trash"},
                {name: "simon bar sinister", data: "trash"},
            ]
            scope.item = scope.dashboards[0];
            scope.update = function() {

            };
            scope.toggleEdit = function(){
                scope.editable = !scope.editable;
                if(scope.editable){
                    scope.textEdit = 'Editing Enabled'
                    $rootScope.$broadcast('edit-enabled')
                } else {
                    scope.textEdit = 'Editing Disabled'
                    $rootScope.$broadcast('edit-disabled')
                }
            }

        }

    };

});
