alert("very begnning");
// $.getScript('another_file.js', function() {
//     //script is loaded and executed put your dependent JS here
// });
// include("https://www.gstatic.com/firebasejs/3.5.2/firebase.js");

//initialize

var StudyHours;
var StudyMinutes;
var ChillHours;
var ChillMinutes;


var gif = (Math.floor(Math.random() * 10));
gif = "../gifs/finished/" + gif + ".gif";

// var firebaseRef_storage = firebase.database().ref().child("storage");
// var firebaseRef_blacklist = firebase.database().ref().child("blacklist");
// var firebaseRef_study_time_seconds = firebase.database().ref().child("study_time_seconds");
// var firebaseRef_chill_time_seconds = firebase.database().ref().child("chill_time_seconds");

alert("beforeblacklistedlist");


// firebaseRef_study_time_seconds.set(5);
alert("hello");

// firebaseRef_storage.on("value", function(snapshot) {
// 	StudyHours = parseInt(snapshot.child("STimeHours").val());
// 	StudyMinutes = parseInt(snapshot.child("STimeMinutes").val());
// 	ChillHours = parseInt(snapshot.child("CTimeHours").val());
// 	ChillMinutes = parseInt(snapshot.child("CTimeMinutes").val());

	var timeStudy = StudyHours * 60 * 60 + StudyMinutes * 60;
	var timeChill = ChillHours * 60 * 60 + ChillMinutes * 60;

	function initializeClockStudy() {
		var interval = setInterval(function() {
			// var seconds = Math.floor((timeStudy % 60));
			// if(seconds < 10) {
			// 	seconds = ('0' + seconds).slice(-2);
			// }
			// var minutes = Math.floor(((timeStudy/60) % 60));
			// if(minutes < 10) {
			// 	minutes = ('0' + minutes).slice(-2);
			// }
			// var hours = Math.floor((((timeStudy/60)/60 % 24)));
			// if(hours < 10) {
			// 	hours = ('0' + hours).slice(-2);
			// }
			// if(timeStudy <= 0) {
			// 	window.open(gif);
			// 	clearInterval(interval);
			// 	seconds = 0;
			// 	minutes = 0;
			// 	hours = 0;
			// }
			// timeStudy--;
			chrome.runtime.sendMessage({msg: "-1"});
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
			if(timeChill <= 0) {
				window.open(gif);
				clearInterval(interval);
				seconds = 0;
				minutes = 0;
				hours = 0;
			}

			if(0) {
				timeChill--;
				firebaseRef_study_time_seconds.set(timeStudy);
			}
		}, 1000);
	}

	initializeClockStudy();
	initializeClockChill();

// });