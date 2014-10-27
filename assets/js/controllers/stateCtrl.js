angular.module("stateCtrl", []).controller("stateController", function($scope, $http, stateFactory) {
    $scope.states = {};
    $scope.selected = undefined;

    stateFactory.getStates()
        .then(function(states) {
            $scope.states = states;
            console.log(states);
        });

    $scope.test = function(d) {
        if (active.node() === this) return reset();
        active.classed("active", false);
        active = d3.select(this).classed("active", true);

        var bounds = path.bounds(d),
              dx = bounds[1][0] - bounds[0][0],
              dy = bounds[1][1] - bounds[0][1],
              x = (bounds[0][0] + bounds[1][0]) / 2,
              y = (bounds[0][1] + bounds[1][1]) / 2,
              scale = .9 / Math.max(dx / width, dy / height),
              translate = [width / 2 - scale * x, height / 2 - scale * y];

        g.transition()
              .duration(750)
              .style("stroke-width", 1.5 / scale + "px")
              .attr("transform", "translate(" + translate + ")scale(" + scale + ")");

        console.log(d.properties.state);
    }

});
