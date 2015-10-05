function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        document.getElementById("lel").innerHTML = "Hello, "+user;
    } else {
        // user = prompt("What's your name?", "");

        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
		document.getElementById("lel").innerHTML = "Hello, "+user;
    }
}

function checkform()
{
    if (document.feedback.field.value == '')
    {
        // something is wrong
        alert('There is a problem with the first field');
        return false;
    }
    else if (document.feedback.field.value == 'Michael')
    {
        // something else is wrong
        alert('Welcome, sir.');
        return true;
    }
    // If the script gets this far through all of your fields
    // without problems, it's ok and you can submit the form

    return true;
}