app.controller("homeController", ["$scope", "getData", function ($scope, getData) {
    "use strict";
    getData.retrieve("http://nodejs-qbjsstudy.rhcloud.com/api/get_job_data");
    $scope.jobDetails = getData.data;
    $scope.images = getData.images;
    $scope.clicked = function (name) {
        getData.selected = name.target.name;
    };
}]);