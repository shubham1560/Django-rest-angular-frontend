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
            $http.get("http://127.0.0.1:8000/jobs/jobs").then(function(response) {
                console.log(response);
            })
        }
    });
});
}());