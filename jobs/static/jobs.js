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

    app.controller("userName", function($rootScope, $scope, $http) {
        $scope.userName = "shubham1560";
        $scope.search = function(username) {
            $http.get("https://api.github.com/users/" + username).then(function(response) {
                console.log(response.data);
                $scope.userData = response.data;
                $http.get(response.data.repos_url).then(function(response) {
                    $scope.repos = response.data;
                })
            }, function(reason) {
                $scope.error = "No user with this name";
            });
        }
    });
}());