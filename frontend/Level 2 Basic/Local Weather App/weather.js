$(document).ready(function() { 
	var apiKey = "732e2f017f22d34608f04e3abca3481d";
	var city = "";
	var state = "";
	var zipCode = "";
	var country = "";
	var units = "imperial";

	$.getJSON('https://freegeoip.net/json/', function(data) {
		city = data.city;
		state = data.region_code;
		zipCode = data.zip_code;
		country = data.country_code;
		$('#location').text(city + ", " + state);
		myWeather(zipCode, country);
	});

//OpenWeather API Call
function myWeather(zip, co) {
	// jQuery.ajaxPrefilter(function(options) {
 //    	if (options.crossDomain && jQuery.support.cors) {
 //        	options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
 //    	}
	// });
	var owm = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + co + "&units=" + units + "&appid=" + apiKey;
		$.getJSON(owm, function(data){
	  		var temp = data.main.temp;
			var tempC = Math.round((temp - 32) / 1.8);
			var description = data.weather[0].description;
			var weatherIcon = data.weather[0].id;
			updateMe(temp, tempC, description, weatherIcon);
	}); //end request
}//end of myWeather function

//updateMe function
function updateMe(tf, tc, desc, ic) {
	$('#temperature').text(Math.round(tf));
	$('#weather-description').text(desc).css('textTransform', 'capitalize');
	$('#weatherIcon').addClass('wi-owm-' + ic);
	$('#updateWeather').on('click', function() {
		if(units === 'imperial') {
			units = 'metric';
			$('#temperature').text(Math.round(tc));
			$('#unit').addClass('wi-celsius');
			$('#unit').removeClass('wi-fahrenheit');
		}
		else {
			units = 'imperial';
			$('#temperature').text(Math.round(tf));
			$('#unit').addClass('wi-fahrenheit');
			$('#unit').removeClass('wi.celsius');
		}
	});
}
});//end Ready