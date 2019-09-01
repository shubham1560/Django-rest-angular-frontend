(function() {
    'use strict';

    var app = angular.module('jobsApi', []);

    app.controller('jobsApiController', function jobs($scope) {
        $scope.name = "Shubham";
    });

    app.controller('demoStack', function jobsController($scope) {
        $scope.person = {
            name: "Shubham",
            age: 23,
        }
        console.log($scope.person);
    });
}());