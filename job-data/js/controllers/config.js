app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    "use strict";
    $stateProvider
        .state("login", {
            url : "/",
            templateUrl : "templates/login.html",
            controller : "loginController"
        })
        .state("home", {
            url : "/home",
            templateUrl : "templates/home.html",
            controller : "homeController"
        })
        .state("details", {
            url : "/details",
            templateUrl : "templates/details.html",
            controller : "detailsController"
        });
    $urlRouterProvider.otherwise("/");
}]);