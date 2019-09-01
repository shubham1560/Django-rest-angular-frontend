(function() {
    'use strict';

    angular.module('jobs.demo', []).controller('jobsController', jobsController);

    function jobsController($scope) {
        $scope.person = {
            name: "Shubham",
            age: 23,
        }
        console.log($scope.person);
    };
}());