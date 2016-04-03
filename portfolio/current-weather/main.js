$(document).ready(function () {
    var degreeC;
    var degreeF;
    var longitude;
    var latitude;
    var temp;

//get user location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
            getWeather(latitude, longitude);
        });    
    }
//END get user location      
});

//API
function getWeather(lati, long) {
    var keycode = "dd590b896067497394e26b39d176ddd6";
    var weather = "http://api.openweathermap.org/data/2.5/weather?lat=" + lati + "&lon=" + long + "&units=metric&APPID=" + keycode;
    
    $.ajax({
        dataType: "jsonp",
        url: weather,
        success: callback
    });
}

function fah() {
    degreeF = Math.round(temp * 1.8 + 32);
    $("#temp").text(degreeF + " F");
  
}

function cel() {
    degreeC = (degreeF - 32) / 1.8;
    $("#temp").text(temp + " C");
}

//get data from API
function callback(data) {
    console.log(data);
    temp = Math.round(data.main.temp);
    
    $("#city").html("Weather in " + data.name);
    $("#temp").html(Math.round(data.main.temp) + " C&#176;");
    
    $("#cond").html(data.weather[0].description);
    
    $("#icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
    
    $("#c-deg").click(function() {
        cel();
    });
     $("#f-deg").click(function() {
        fah();
    });
    $("p").remove();
    $("button").css("display", "inline-block");
}