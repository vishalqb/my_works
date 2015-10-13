app.controller("loginController", ["$scope", "$location", function ($scope, $location) {
    "use strict";
//    $scope.username = null;
//    $scope.password = null;
    console.log($scope.username);
    console.log($scope.password);
    $scope.validate = function () {
        if ($scope.username === "user" && $scope.password === "password") {
            console.log($scope.username + $scope.password);
            $location.path("/home");
        } else {
            angular.element($("#errorText")).text("Invalid username and password");
        }
    };
}]);