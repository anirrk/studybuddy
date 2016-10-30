//initialize
  var config = {
    apiKey: "AIzaSyCtdpDh3QN2AAyDF1LDg7bn2XRWrJ0KMm0",
    authDomain: "firstproject-e8124.firebaseapp.com",
    databaseURL: "https://firstproject-e8124.firebaseio.com",
    storageBucket: "firstproject-e8124.appspot.com",
    messagingSenderId: "340933151333"
  };
  firebase.initializeApp(config);


var StudyHours;
var StudyMinutes;
var ChillHours;
var ChillMinutes;

var gif = (Math.floor(Math.random() * 10));
gif = "../gifs/finished/" + gif + ".gif";

var firebaseRef = firebase.database().ref().child("storage");

firebaseRef.on("value", function(snapshot) {
	StudyHours = parseInt(snapshot.child("STimeHours").val());
	StudyMinutes = parseInt(snapshot.child("STimeMinutes").val());
	ChillHours = parseInt(snapshot.child("CTimeHours").val());
	ChillMinutes = parseInt(snapshot.child("CTimeMinutes").val());

	var timeStudy = StudyHours * 60 * 60 + StudyMinutes * 60;
	var timeChill = ChillHours * 60 * 60 + ChillMinutes * 60;

	function initializeClockStudy() {
		var interval = setInterval(function() {
			var seconds = Math.floor((timeStudy % 60));
			if(seconds < 10) {
				seconds = ('0' + seconds).slice(-2);
			}
			var minutes = Math.floor(((timeStudy/60) % 60));
			if(minutes < 10) {
				minutes = ('0' + minutes).slice(-2);
			}
			var hours = Math.floor((((timeStudy/60)/60 % 24)));
			if(hours < 10) {
				hours = ('0' + hours).slice(-2);
			}
			document.getElementById("clockStudy").innerHTML = hours + ':' + minutes + ':' + seconds;
			if(timeStudy <= 0) {
				window.open(gif);
				clearInterval(interval);
				seconds = 0;
				minutes = 0;
				hours = 0;
			}
			timeStudy--;
		}, 1000);
	}

	function initializeClockChill() {
		var interval = setInterval(function() {
			var seconds = Math.floor((timeChill % 60));
			if(seconds < 10) {
				seconds = ('0' + seconds).slice(-2);
			}
			var minutes = Math.floor(((timeChill/60) % 60));
			if(minutes < 10) {
				minutes = ('0' + minutes).slice(-2);
			}
			var hours = Math.floor((((timeChill/60)/60 % 24)));
			if(hours < 10) {
				hours = ('0' + hours).slice(-2);
			}
			document.getElementById("clockChill").innerHTML = hours + ':' + minutes + ':' + seconds;
			if(timeChill <= 0) {
				window.open(gif);
				clearInterval(interval);
				seconds = 0;
				minutes = 0;
				hours = 0;
			}
			// INSERT FIREBASE LIST OF BLACKLISTED URLS HERE TO BE CROSS-REFERENCED
			if(0) {
				timeChill--;
			}
		}, 1000);
	}

	initializeClockStudy();
	initializeClockChill();

});

