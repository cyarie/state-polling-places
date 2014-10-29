angular.module("appRoutes", []).config(["$routeProvider",
    function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/assets/views/search.html",
                controller: "stateController"
            })

            .otherwise({
                redirectTo: "/"
            })
    }]);
