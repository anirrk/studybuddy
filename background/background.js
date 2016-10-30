alert("very begnning");
chrome.storage.local.clear(function(){
	alert("storage cleared");
});

var StudyHours;
var StudyMinutes;
var ChillHours;
var ChillMinutes;



// chrome.storage.onChanged.addListener(function(changes, namespace) {
// 	alert("onchanged");


// });

// var gif = (Math.floor(Math.random() * 10));
// gif = "../gifs/finished/" + gif + ".gif";

// var firebaseRef_storage = firebase.database().ref().child("storage");
// var firebaseRef_blacklist = firebase.database().ref().child("blacklist");
// var firebaseRef_study_time_seconds = firebase.database().ref().child("study_time_seconds");
// var firebaseRef_chill_time_seconds = firebase.database().ref().child("chill_time_seconds");

// firebaseRef_storage.on("value", function(snapshot) {
// 	StudyHours = parseInt(snapshot.child("STimeHours").val());
// 	StudyMinutes = parseInt(snapshot.child("STimeMinutes").val());
// 	ChillHours = parseInt(snapshot.child("CTimeHours").val());
// 	ChillMinutes = parseInt(snapshot.child("CTimeMinutes").val());

var timeStudy;
// var timeChill = ChillHours * 60 * 60 + ChillMinutes * 60;

function initializeClockStudy() {
	timeStudy = StudyHours * 60 * 60 + StudyMinutes * 60;

	var interval = setInterval(function() {

			// timeStudy = 5;
			setTimeout(function () {
				var obj = {};
				obj['studyTime'] = 5;
				chrome.storage.local.set(obj,function(){
					console.log("studyTime in seconds is saving ");
				});
			}, 10000);
			// chrome.storage.local.get('studyTime',function(result){
			// 	alert(result.studyTime);
			// });
			// chrome.storage.sync.get('STimeHours',function(items){
			// 	StudyHours = items.STimeHours;
			// 	alert(StudyHours);
			// });
			chrome.runtime.sendMessage("timerupdate");

		// chrome.runtime.sendMessage({msg: "-1"});
	}, 1000);
}

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	

	// chrome.storage.local.get('STimeHours',function(items){
 	// console.log("localstorage feedback" + items);
	// 	StudyHours = items.STimeHours;
	// 	console.log("local storage studyhours: " + StudyHours);
	// });
	if (message=="test") {
	    // alert("message received");

	    chrome.storage.sync.get('STimeHours', function(result){
	    	console.log(result);
			StudyHours = result.STimeHours;
			alert(StudyHours);
		});
		chrome.storage.sync.get('STimeMinutes',function(result){
			StudyMinutes = result.STimeMinutes;
		});
		chrome.storage.sync.get('CTimeHours',function(result){
			ChillHours = result.CTimeHours;
		});
		chrome.storage.sync.get('CTimeMinutes',function(result){
			ChillMinutes = result.CTimeMinutes;
		});

		// alert(StudyHours); // undefined
		initializeClockStudy();
	}
});

// function initializeClockChill() {
// 	var interval = setInterval(function() {
// 		var seconds = Math.floor((timeChill % 60));
// 		if(seconds < 10) {
// 			seconds = ('0' + seconds).slice(-2);
// 		}
// 		var minutes = Math.floor(((timeChill/60) % 60));
// 		if(minutes < 10) {
// 			minutes = ('0' + minutes).slice(-2);
// 		}
// 		var hours = Math.floor((((timeChill/60)/60 % 24)));
// 		if(hours < 10) {
// 			hours = ('0' + hours).slice(-2);
// 		}
// 		if(timeChill <= 0) {
// 			window.open(gif);
// 			clearInterval(interval);
// 			seconds = 0;
// 			minutes = 0;
// 			hours = 0;
// 		}

// 		if(0) {
// 			timeChill--;
// 			firebaseRef_study_time_seconds.set(timeStudy);
// 		}
// 	}, 1000);
// }

// initializeClockChill();

// });