
app.controller('dashboardCtrl', function($scope, ConstFactory) {

    $scope.Data = {counter: 0};

    // These will be managed by the child scope in the controller bar
    $scope.editable = false;
    $scope.dashName = "You have no dashboards";
    $scope.dashDesc = "Please create a dashboard";

    // TODO: Put the charts for the selected dashboard on the scope here
    $scope.$on(ConstFactory.EVENT_DB_SELECTED, function(event, chosen) {
        console.log("The data must be udpated!  Dashboard is", chosen)
    })

});
