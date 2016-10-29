var deadline = '04:00:00';

function findRemainingTime(deadline) {
	// Get the time in milliseconds
	var time = Date.parse(deadline) - Date.parse(new Date());
	// Convert milliseconds to other units
	var seconds = Math.floor((time/1000) % 60);
	var minutes = Math.floor(((time/1000)/60) % 60);
	var hours = Math.floor((((time/1000)/60)/60) % 24);
	// Return the values
	return {
		'total': time,
		'seconds': seconds,
		'minutes': minutes,
		'hours': hours
	};
}

function initializeClock(id, deadline) {
	// Store reference to clock div
	var clock = document.getElementById(id);
	// Create function that finds time interval and prints it
	var interval = setInterval(function() {
		var time = findRemainingTime(deadline);
		clock.innerHTML = 'days: ' + time.days + '<br>' +
		'hours: ' + time.hours + '<br>' +
		'minutes: ' + time.minutes + '<br>' +
		'seconds: ' + time.seconds;
		if(time.total <= 0) {
			clearInterval(interval);
		}
	}, 1000)
}