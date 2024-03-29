(function() {
    'use strict';
    console.log("Script Loaded")

    var app = angular.module('SummaryApi', []);

    app.controller('dataSummaryApi', function($scope, $http) {

        $scope.showEditForm = false;
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
            $http.post("/summary/summary/", { tech: $scope.tech, summary: $scope.summary }).then(function() {
                console.log("Posted Data");
                $scope.search();
            }, function() {
                console.log("Couldn't post data");
            });
        }

        $scope.edit = function() {
            $http.put("/summary/summary/40/", { tech: "Well", summary: "yeah" }).then(function() {
                console.log("Posted Data");
                // $scope.search();
            });
            //console.log(id);
            $scope.showEditForm = true;
            console.log("Working");
            $http.delete("/summary/summary/42/").then(function() {
                console.log("deleted Data");
                $scope.search();
            });
        }

        $scope.search();
    });
}())