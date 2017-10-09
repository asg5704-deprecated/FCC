let url = 'https://wind-bow.glitch.me/twitch-api/channels/freecodecamp?callback=?';

$.getJSON(url, function(data) {
	let displayName = data.display_name;
	let displayIcon = data.logo;
	let userURL = data.url;
	let description = data.status;
	$('#twitchUsername').html(`<a href="${userURL}">${displayName} </a>`);
	$('#twitchLogo').html(`<img src=${displayIcon} /> `);
	$('#streamInfo').text(description);
	if(data.stream === null) {
		$('#networkStatus').text('Offline ');
		$('#networkStatus').addClass('offline');
	}
	else {
		$('#networkStatus').text('Online ');
		$('#networkStatus').addClass('online');
	}
});