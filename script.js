var ipAddr="",region="",country="";
$( document ).ready(function() {
    $.getJSON("http://www.telize.com/geoip?callback=?",
        function(json) {
            if(json.hasOwnProperty('ip')){
                // ipAddr=ipAddr.concat(json.ip);
                ipAddr=json.ip;
            }

            if(json.hasOwnProperty('region')){
                region=json.region;
            }

            if(json.hasOwnProperty('country')){
                country = json.country;
            }
            
        }
    );
});



$( "#lineForm" ).keyup(function(event) {
    if(event.keyCode == 13){
        $("#para").text($(this).val());
        // var xhr = new XMLHttpRequest();
        // xhr.open("GET", "https://www.codecademy.com/", false);
        // xhr.send();

        // console.log(xhr.status);
        // console.log(xhr.statusText);
    }
});

$("#action").click( function(){
    $(this).append("<button>hi</button>");
});



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

function logCookie(){
    console.log(document.cookie);
}

function addToCookie(key,value){
    document.cookie = key + "=" + value + ";"+document.cookie;
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        document.getElementById("lel").innerHTML = "Hello, "+user;
    } else {
        user = prompt("What's your name?", "");

        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
        document.getElementById("lel").innerHTML = "Hello, "+user;
    }
}