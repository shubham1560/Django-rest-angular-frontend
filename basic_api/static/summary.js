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
            console.log("Insert Data");
        }
    });
}())