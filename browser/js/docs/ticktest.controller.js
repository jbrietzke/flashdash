
app.controller('ticktest', function($http, $scope, $log) {

    let ticker = setInterval(tick, 1000);
    $scope.counter = 0;

    function tick() {
        $http.get('/api/test/loghits')
        .then(rslt => $scope.counter = rslt.data)
        .catch(err => {clearInterval(ticker); $scope.counter = "STOPPED"});
    }


});