angular.module("appRoutes",[]).config(["$routeProvider",

    function($routeProvider) {
        $routeProvider

            .when("/", {
                templateUrl: "/assets/views/search.html",
                controller: "stateController"
            })

            .when("/states", {
                templateUrl: "/assets/views/states.html",
                controller: "stateController"
            })

            .otherwise({
                redirectTo: "/"
            })
    }]);
