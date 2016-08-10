
app.controller('ticktest', function($http, $scope, tickFactory) {

    $scope.Data = {counter: 0};

    tickFactory.startTicking($scope.Data);

});

app.factory('tickFactory', function($interval, $http) {
    let factory = {};

    factory.startTicking = function(Data) {
        function tick() {
            $http.get('/api/test/loghits')
            .then(rslt => { console.log("I ticked!"); Data.counter = rslt.data})
            .catch(err => {clearInterval(ticker); Data.counter = "STOPPED"});
        }
        let ticker = $interval(tick, 1000);
    }

    return factory;
});