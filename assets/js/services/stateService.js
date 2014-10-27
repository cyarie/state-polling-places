angular.module("stateService", []).factory("stateFactory", function($http, $q) {
    var service = {};
    var apiUrl = "/api/states/";

    service.getStates = function() {
        var deferred = $q.defer();
        $http.get(apiUrl)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function() {
                deferred.reject("THERE ARE NO MORE STATES!");
            });
        return deferred.promise;
    };

    return service;
});
