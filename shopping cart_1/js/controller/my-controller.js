/*global $, angular*/
var app = angular.module("cart", []);

app.controller("cartController", ["$scope", "productService", function ($scope, productService) {
    "use strict";
    $scope.productName = "";
    $scope.productPrice;
    $scope.productAvail;
    $scope.idValue;
    $scope.totalPrice = 0;
    $scope.productCount;
    $scope.status = "";
    $scope.prods = productService;
    $scope.flag = false;
    
    $scope.removeCart = function () {
        if ($scope.flag === false) {
            $scope.status = "No products selected";
        } else if ($scope.prods[$scope.idValue].count <= 0) {
            $scope.prods[$scope.idValue].count = 0;
            $scope.status = "No products selected";
        } else {
            $scope.status = "";
            $scope.prods[$scope.idValue].availability += 1;
            $scope.productAvail = $scope.prods[$scope.idValue].availability;
            $scope.totalPrice -= $scope.prods[$scope.idValue].price;
            $scope.prods[$scope.idValue].count -= 1;
            $scope.productName = $scope.prods[$scope.idValue].name;
            $scope.productCount = $scope.prods[$scope.idValue].count;
        }
    };

    $scope.addCart = function () {
        if ($scope.flag === false) {
            $scope.status = "No products selected";
        } else if ($scope.prods[$scope.idValue].availability <= 0) {
            $scope.status = "No products available";
        } else {
            $scope.status = "";
            $scope.prods[$scope.idValue].availability -= 1;
            $scope.productAvail = $scope.prods[$scope.idValue].availability;
            $scope.totalPrice += $scope.prods[$scope.idValue].price;
            $scope.prods[$scope.idValue].count += 1;
            $scope.productName = $scope.prods[$scope.idValue].name;
            $scope.productCount = $scope.prods[$scope.idValue].count;
        }
    };
    
    $scope.display = function ($event) {
        $scope.flag = true;
        $scope.status = "";
        $scope.idValue = $event.target.id;
        $("#" + $event.target.id).effect("bounce", "slow");
        $scope.productName = $scope.prods[$scope.idValue].name;
        $scope.productPrice = $scope.prods[$scope.idValue].price;
        $scope.productAvail = $scope.prods[$scope.idValue].availability;
        $scope.productName = $scope.prods[$scope.idValue].name;
        $scope.productCount = $scope.prods[$scope.idValue].count;
    };
}]);
