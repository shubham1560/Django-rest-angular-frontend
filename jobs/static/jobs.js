(function() {
    'use strict';

    var app = angular.module('jobsApi', []);

    app.controller('jobsApiController', function($scope) {
        $scope.name = "Shubham";
    });

    app.controller('demoStack', function($scope) {
        $scope.person = {
            name: "Shubham",
            age: 23,
        }
    });

    app.controller('dataJobApi', function($scope, $http) {
        $scope.search = function() {
            $http.get("/jobs/jobs").then(function(response) {
                $scope.data = response.data;
                console.log(response.data);
            })
        }
    });
}())