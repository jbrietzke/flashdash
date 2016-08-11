app.directive('dashboardnav', function ($rootScope, AuthService, AUTH_EVENTS, $state) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/dashboard/navbar/dashboard.navbar.html',
        link: function (scope) {


            scope.editable = false;

            scope.textEdit = 'Editing Disabled'


            scope.toggleEdit = function(){
                scope.editable = !scope.editable;
                if(scope.editable){
                    scope.textEdit = 'Editing Enabled'
                    $rootScope.$broadcast('edit-enabled')

                } else{
                    scope.textEdit = 'Editing Disabled'
                    $rootScope.$broadcast('edit-disabled')
                }


                //broad cast scope.editable to the dashboard controller
            }





            // $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
            // $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
            // $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

        }

    };

});
