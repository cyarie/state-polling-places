angular.module("stateCtrl", []).controller("stateController", function($scope, $http, stateFactory) {
    $scope.createState = {};
    $scope.stateData = {};
    $scope.states = {};
    $scope.selected = undefined;

    stateFactory.getStates()
        .then(function(states) {
            $scope.states = states;
            $scope.stateData = states;
            console.log(states);
        });

    $scope.makeState = function() {
        $http.post("/api/states/", $scope.createState)
            .success(function(data) {
                $scope.stateData = data;
            })
            .error(function(error) {
                console.log(error)
            })
    }

});
