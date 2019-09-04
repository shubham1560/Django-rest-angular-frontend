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
                console.log(response);
            })
        }
        $scope.formData = function() {
            console.log("Inside");
            console.log($scope.test);
            console.log($scope.file);
        }

        console.log($scope.pd);
        $scope.insert = function() {
            // var req = {
            //     method: 'POST',
            //     url: '/jobs/jobs',
            //     headers: {
            //         'Content-Type': undefined
            //     },
            //     $scope.data: { image: 'test', summary: 'Well' }
            // }

            $http.post("/jobs/jobs/", { image: "", summary: 'Post Test' }).then(function() {
                console.log("Posted Data");
            }, function() {
                console.log("Couldn't post data");
            });
        }
    });
}())