
app.controller('dashboardCtrl', ['$scope', 'DashboardFactory', '$rootScope', 'UserFactory', 'dashList',
    function($scope, DashboardFactory, $rootScope, UserFactory, dashList) {

    $scope.editable = false;
    $scope.dashName = "You have no dashboards";
    $scope.dashDesc = "Please create a dashboard";
    $scope.dashboard = null;

    $scope.update = function() {
        if ($scope.selectedDb) {
            $scope.dashName = $scope.selectedDb.name;
            $scope.dashDesc = $scope.selectedDb.description;
            console.log("The data is being udpated!  Dashboard is", $scope.selectedDb)
            DashboardFactory.getDashboard($scope.selectedDb.id)
            .then(db => {
                $scope.dashboard = db;
                $scope.$applyAsync();
            })
        }
    };

    // The resolve fetched a list of dashboards for this user.  Note that this
    // does not entail the graphs, which must be fetched later.
    $scope.dashboardList = dashList;
    if (dashList.length > 0)
        $scope.selectedDb = dashList[0];
    $scope.update();

}]);
