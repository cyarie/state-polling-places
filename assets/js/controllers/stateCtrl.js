angular.module("stateCtrl", []).controller("stateController", function($scope, $http, stateFactory) {
    $scope.states = {};
    $scope.selected = undefined;

    stateFactory.getStates()
        .then(function(states) {
            $scope.states = states;
            console.log(states);
        });

});
