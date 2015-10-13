app.factory("getData", ["$http", function ($http) {
    "use strict";
    var service = {};
    service.data = [];
    service.retrieve = function (url) {
        $http.get(url)
            .success(function (response) {
                service.data = response.results;
            })
            .error(function (response) {
            });
    };
    service.images = [
        {name : "Developer", path : "assets/images/developers.jpg"},
        {name : "SQL", path : "assets/images/sql.jpg"},
        {name : "Mobile", path : "assets/images/mobile.jpg"},
        {name : "IOS", path : "assets/images/ios.jpg"},
        {name : "BDM", path : "assets/images/bdm.jpg"},
        {name : "Business Analyst", path : "assets/images/business.jpg"},
        {name : "ElasticSearch", path : "assets/images/elastic.jpg"},
        {name : "PHP", path : "assets/images/php.jpg"},
        {name : "Ruby", path : "assets/images/ruby.jpg"},
        {name : "Web", path : "assets/images/web.jpg"},
        {name : "Android", path : "assets/images/android.jpg"},
        {name : "Java", path : "assets/images/java.jpg"},
        {name : "MongoDB", path : "assets/images/mongodb.jpg"},
        {name : "JavaScript", path : "assets/images/javascript.jpg"},
        {name : "MEAN", path : "assets/images/mean.jpg"}
    ];
    service.selected = "intial";
    return service;
}]);