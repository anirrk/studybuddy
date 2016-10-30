
var StudyHours;
var StudyMinutes;
var ChillHours;
var ChillMinutes;

var firebaseRef = firebase.database().ref().child("storage");

firebaseRef.on("value", function(snapshot) {
	StudyHours = parseInt(snapshot.child("STimeHours").val());
	StudyMinutes = parseInt(snapshot.child("STimeMinutes").val());
	ChillHours = parseInt(snapshot.child("CTimeHours").val());
	ChillMinutes = parseInt(snapshot.child("CTimeMinutes").val());

	var time = StudyHours * 60 * 60 + StudyMinutes * 60;

	function initializeClock() {
		var interval = setInterval(function() {
			time--;
			var seconds = Math.floor((time % 60));
			if(seconds < 10) {
				seconds = ('0' + seconds).slice(-2);
			}
			var minutes = Math.floor(((time/60) % 60));
			if(minutes < 10) {
				minutes = ('0' + minutes).slice(-2);
			}
			var hours = Math.floor((((time/60)/60 % 24)));
			if(hours < 10) {
				hours = ('0' + hours).slice(-2);
			}
			document.getElementById("clock").innerHTML = hours + ':' + minutes + ':' + seconds;
			if(time <= 0) {
				clearInterval(interval);
			}
		}, 1000);
	}

	initializeClock();
});

