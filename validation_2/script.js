function verify() {
    "use strict";
    var name = document.getElementById("uname"), passwd = document.getElementById("pass"), mymail =    document.getElementById("email"), dot = ".", at = "@", index_at, index_dot;
    if (name.value === "" || passwd.value === "" || mymail.value === "") {
        document.getElementById("vl").innerHTML = "Values missing";
    } else {
        if (mymail.indexOf(at) === -1 || mymail.indexOf(dot) === -1) {
            document.getElementById("e").innerHTML = mymail.indexOf(at);
            mymail.focus();
        }
    }
}
function isUser() {
    "use strict";
    var name = document.getElementById("uname");
	if (name.value === "") {
        document.getElementById("u").innerHTML = "Please insert username before continuing";
        name.focus();
    } else {
        document.getElementById("u").innerHTML = "";
    }
}
function isPass() {
    "use strict";
    var passwd = document.getElementById("pass");
	if (passwd.value === "") {
        document.getElementById("p").innerHTML = "Please insert password before continuing";
        passwd.focus();
    } else {
        document.getElementById("p").innerHTML = "";
    }
}
function isMail() {
    "use strict";
    var mymail = document.getElementById("email");
    if (mymail.value === "") {
        document.getElementById("e").innerHTML = "Please insert email before continuing";
        mymail.focus();
    } else {
        document.getElementById("e").innerHTML = "";
    }
}