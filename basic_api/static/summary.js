(function() {
    'use strict';
    console.log("Script Loaded")

    var app = angular.module('SummaryApi', []);

    app.controller('dataSummaryApi', function($scope, $http) {
        console.log("init Controller");
        $scope.search = function() {
            $http.get("/summary/summary/").then(function(response) {
                $scope.data = response.data;
                console.log(response);
            })
        }

        $scope.insert = function() {
            console.log($scope.tech, $scope.summary);
            console.log("Insert Data");
            $http.post("/summary/summary/", { tech: "Well", summary: 'Post Test' }).then(function() {
                console.log("Posted Data");
            }, function() {
                console.log("Couldn't post data");
            });
        }
    });
}())