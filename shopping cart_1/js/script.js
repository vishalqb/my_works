/*global $, angular */
var prods = [], pname, name_value, pprice, price_value, pavail, avail_value, total_value, tot = 0, total_price = 0;
    
$(document).ready(function () {
    "use strict";
    $(".row").mouseenter(function () {
        $("img").mouseenter(function (e) {
            var ele = e.currentTarget.id;
            $("#" + ele).css("opacity", "0.5");
        });
        $("img").mouseout(function (e) {
            var ele = e.currentTarget.id;
            $("#" + ele).css("opacity", "1");
        });
    });
});
