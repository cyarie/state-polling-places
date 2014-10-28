angular.module("mapDirective", []).directive("usMap", function() {
    var margin = {top: 60, right: 60, bottom: 60, left: 60};
    // var w = 970 - margin.left - margin.right;
    var width = parseInt(d3.select("#svgContainer").style("width"));
    // var h = 480 - margin.top - margin.bottom;
    var height = 500;

    return {
        restrict: "E"
    },
    link: function(scope)
});