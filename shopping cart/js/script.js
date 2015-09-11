
/*global $ */
var prods = [], pname, name_value, pprice, price_value, pavail, avail_value, total_value, tot = 0, total_price = 0;

function display(n) {
    "use strict";
    document.getElementById("disp").innerHTML = "";
    var br1 = document.createElement("br"), br2 = document.createElement("br"), br3 = document.createElement("br"), head = document.createElement("h3");
    total_value = document.createElement("span");
    document.getElementById("disp").appendChild(br1);
    document.getElementById("disp").appendChild(br2);
    head.innerHTML = "Product Details";
    document.getElementById("disp").appendChild(head);
    pname = document.createElement("span");
    name_value = document.createElement("span");
    pprice = document.createElement("span");
    price_value = document.createElement("span");
    pavail = document.createElement("span");
    avail_value = document.createElement("span");
    pname.innerHTML = "Product name:  ";
    name_value.innerHTML = prods[n].name;
    pprice.innerHTML = "Product price:  ";
    price_value.innerHTML = prods[n].price;
    pavail.innerHTML = "Product availability:  ";
    avail_value.innerHTML = prods[n].availability;
    total_value.innerHTML = "Total price: " + tot;
    document.getElementById("disp").appendChild(pname);
    document.getElementById("disp").appendChild(name_value);
    document.getElementById("disp").appendChild(br1);
    document.getElementById("disp").appendChild(pprice);
    document.getElementById("disp").appendChild(price_value);
    document.getElementById("disp").appendChild(br2);
    document.getElementById("disp").appendChild(pavail);
    document.getElementById("disp").appendChild(avail_value);
    document.getElementById("disp").appendChild(br3);
    document.getElementById("disp").appendChild(total_value);
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
        total_value.innerHTML = "Total price" + tot;
    }
    display(n);
    total_value.innerHTML = "Total price" + tot;
};

Product.prototype.addCart = function (n) {
    "use strict";
    if (this.availability === 0) {
        display(n);
        total_value.innerHTML = "Not available";
    } else {
        this.availability = this.availability - 1;
        tot = tot + this.price;
        total_value.innerHTML = "Total price" + tot;
    }
    display(n);
    total_value.innerHTML = "Total price" + tot;
};
    
function start() {
    "use strict";
    var num = 0, count = 10, names = ["Shirts", "Accessories", "Sports", "Mobiles", "Books", "Computer", "Furniture", "Shoes", "Bags", "Wallet"], price = [100, 50, 200, 1000, 75, 2000, 3000, 150, 200, 50], no = [count, count, count, count, count, count, count, count, count, count], new_div, new_image;
    while (num < 10) {
        new_div = document.createElement("div");
        new_div.setAttribute("class", "col-lg-3 col-md-4 col-xs-6 thumb loc");
        new_div.setAttribute("id", num.toString());
        document.getElementById("items").appendChild(new_div);
        new_image = document.createElement("img");
        new_image.setAttribute("class", "img-responsive items");
        new_image.setAttribute("id", num.toString());
        new_image.setAttribute("src", "/home/vishal/my_works/shopping cart/assets/" + num.toString() + ".jpg");
        new_image.setAttribute("width", "100");
        new_image.setAttribute("height", "100");
        document.getElementById(num.toString()).appendChild(new_image);
        prods[num] = new Product(names[num], price[num], no[num]);
        num = num + 1;
    }
    
    document.getElementById("add").addEventListener("click", function () {
        var product_name = name_value.innerHTML, n = 0;
        while (n < 10) {
            if (prods[n].name === product_name) {
                prods[n].addCart(n);
                break;
            }
            n = n + 1;
        }
    });
    
    document.getElementById("cancel").addEventListener("click", function () {
        var product_name = name_value.innerHTML, n = 0;
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
                $("#" + ele).css("opacity", ".5");
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




