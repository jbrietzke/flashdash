
app.controller('dashboardCtrl', function($scope, ConstFactory, DashboardFactory) {

    $scope.Data = {counter: 0};

    // These will be managed by the child scope in the controller bar
    $scope.editable = false;
    $scope.dashName = "You have no dashboards";
    $scope.dashDesc = "Please create a dashboard";
    $scope.dashboard = null;


    // TODO: Put the charts for the selected dashboard on the scope here
    $scope.$on(ConstFactory.EVENT_DB_SELECTED, function(event, chosen) {
        console.log("The data must be udpated!  Dashboard is", chosen)
        DashboardFactory.getDashboard(chosen.id)
        .then(db => {
            $scope.dashboard = db;
        })
    })

    $scope.blab = function() {
        console.log($scope.dashboard);
    }

});
