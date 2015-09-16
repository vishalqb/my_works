
/*global $ */
var prods = [], pname, name_value, pprice, price_value, pavail, avail_value, total_value, tot = 0, total_price = 0;

function display(n) {
    "use strict";
    $("#disp").empty();
    var br1 = $("<br>"), br2 = $("<br>"), br3 = $("<br>"), head = $("<h3>"), show = $("#disp");
    total_value = $("<span></span>");
    show.append(br1);
    show.append(br2);
    head.text("Product Details");
    show.append(head);
    pname = $("<span></span>");
    name_value = $("<span></span>");
    pprice = $("<span></span>");
    price_value = $("<span></span>");
    pavail = $("<span></span>");
    avail_value = $("<span></span>");
    pname.text("Product name:  ");
    name_value.text(prods[n].name);
    pprice.text("Product price:  ");
    price_value.text(prods[n].price);
    pavail.text("Product availability:  ");
    avail_value.text(prods[n].availability);
    total_value.text("Total price: " + tot);
    show.append(pname);
    show.append(name_value);
    show.append(br1);
    show.append(pprice);
    show.append(price_value);
    show.append(br2);
    show.append(pavail);
    show.append(avail_value);
    show.append(br3);
    show.append(total_value);
}

function Base(name, price) {
    "use strict";
    this.name = name;
    this.price = price;
}

function Product(name, price, availability) {
    "use strict";
    Base.call(this, name, price);
    this.availability = availability;
}

Product.prototype.removeCart = function (n) {
    "use strict";
    if (this.availability >= 10) {
        this.availability = 10;
    } else {
        this.availability = this.availability + 1;
        tot = tot - this.price;
        total_value.text("Total price" + tot);
    }
    display(n);
    total_value.text("Total price" + tot);
};

Product.prototype.addCart = function (n) {
    "use strict";
    if (this.availability === 0) {
        display(n);
        total_value.text("Not available");
    } else {
        this.availability = this.availability - 1;
        tot = tot + this.price;
        total_value.text("Total price" + tot);
    }
    display(n);
    total_value.text("Total price" + tot);
};
    
function start() {
    "use strict";
    var num = 0, count = 10, names = ["Shirts", "Accessories", "Sports", "Mobiles", "Books", "Computer", "Furniture", "Shoes", "Bags", "Wallet"], price = [100, 50, 200, 1000, 75, 2000, 3000, 150, 200, 50], no = [count, count, count, count, count, count, count, count, count, count], new_div, new_image;
    while (num < 9) {
        new_div = $("<div></div>");
        new_div.addClass("col-lg-4 col-md-4 col-sm-3 col-xs-5 thumb limit");
        new_div.attr("id", num.toString());
        
        if (num < 3) {
            $("#items_1").append(new_div);
        } else if (num >= 3 && num < 6) {
            $("#items_2").append(new_div);
        } else {
            $("#items_3").append(new_div);
        }
        new_image = $("<img>");
        new_image.addClass("img-responsive imgs");
        new_image.attr("id", num.toString());
        new_image.attr("src", "../shopping cart/assets/" + num.toString() + ".jpg");
        new_image.attr("width", "100");
        new_image.attr("height", "100");
        $("#" + num.toString()).append(new_image);
        prods[num] = new Product(names[num], price[num], no[num]);
        num = num + 1;
    }
    
    new_div = $("<div></div>");
    new_div.attr("id", "disp");
    
    $("#add").bind("click", function () {
        var product_name = name_value.text(), n = 0;
        while (n < 10) {
            if (prods[n].name === product_name) {
                prods[n].addCart(n);
                break;
            }
            n = n + 1;
        }
    });
    
    $("#cancel").bind("click", function () {
        var product_name = name_value.text(), n = 0;
        while (n < 10) {
            if (prods[n].name === product_name) {
                prods[n].removeCart(n);
                break;
            }
            n = n + 1;
        }
    });
    
    $(document).ready(function () {
        $(".row").mouseenter(function () {
            $("img").mouseenter(function (e) {
                var ele = e.currentTarget.id;
                $("#" + ele).css("opacity", "0.5");
                /*$("#" + ele).animate({
                    opacity : "0.5"
                });*/
            });
            $("img").mouseout(function (e) {
                var ele = e.currentTarget.id;
                $("#" + ele).css("opacity", "1");
            });
            
            $("img").bind("click", function (e) {
                var ele = parseInt(e.currentTarget.id, 10);
                display(ele);
            });
        });
    });

}

(function () {
    "use strict";
    start();
}());


