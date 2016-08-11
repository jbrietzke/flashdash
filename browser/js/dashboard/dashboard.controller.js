
app.controller('dashboardCtrl', function($rootScope, $http, $scope) {

    $scope.Data = {counter: 0};

    $scope.editable = false;

    var enableEdit = function(){
        $scope.editable = true;
    }
    var disableEdit = function(){
        $scope.editable = false
    }


    $scope.$on('edit-enabled', enableEdit);
    $scope.$on('edit-disable', disableEdit);


});
