  // Initialize Firebase
var config = {
  	apiKey: "AIzaSyCtdpDh3QN2AAyDF1LDg7bn2XRWrJ0KMm0",
  	authDomain: "firstproject-e8124.firebaseapp.com",
  	databaseURL: "https://firstproject-e8124.firebaseio.com",
  	storageBucket: "firstproject-e8124.appspot.com",
  	messagingSenderId: "340933151333"
};
firebase.initializeApp(config);

var inputtedSTimeHours;
var inputtedSTimeMinutes;
var inputtedCTimeHours;
var inputtedCTimeMinutes;
var firebaseRef = firebase.database().ref();

// var time_string;


var enterButton = document.getElementById("enterButton");
enterButton.addEventListener('click', function() {
	inputtedSTimeHours = document.getElementById("studyInputHours").value;
	inputtedSTimeMinutes = document.getElementById("studyInputMins").value;
	inputtedCTimeHours = document.getElementById("chillInputHours").value;
	inputtedCTimeMinutes = document.getElementById("chillInputMins").value;
	
	firebaseRef.child("storage").set({
	  STimeHours: inputtedSTimeHours,
	  STimeMinutes: inputtedSTimeMinutes,
	  CTimeHours : inputtedCTimeHours,
	  CTimeMinutes : inputtedCTimeMinutes
	})

	setTimeout(function () {
			// Also storing google storage

			// var obj = {};
			// obj['studyTime'] = timeStudy;
			// chrome.storage.local.set(obj,function(){
			// 	console.log("studyTime in seconds is saving ");
			// });
			// chrome.storage.local.set({'STimeHours' : inputtedSTimeHours}, function() {
			// 	chrome.storage.sync.get("STimeHours", function(data) {
		 //      		console.log("data", data);
		 //    	});
		    	var obj1 = {};
		    	obj1['STimeHours'] = 5;
		    	chrome.storage.local.set(obj1,function(){
		    		console.log("studyTime in seconds is saving " + inputtedSTimeHours);
		    	});


		    	var obj2 = {};
		    	obj2['STimeMinutes'] = inputtedSTimeMinutes;
		    	chrome.storage.local.set(obj2,function(){
		    		console.log("studyTime in seconds is saving ");
		    	});

		    	var obj3 = {};
		    	obj3['CTimeHours'] = inputtedCTimeHours;
		    	chrome.storage.local.set(obj3,function(){
		    		console.log("studyTime in seconds is saving ");
		    	});

		    	var obj4 = {};
		    	obj4['CTimeMinutes'] = inputtedCTimeMinutes;
		    	chrome.storage.local.set(obj4,function(){
		    		console.log("studyTime in seconds is saving ");
		    	});
		    	
			// });
		 //    chrome.storage.local.get('STimeHours',function(items){
		 //    	console.log("localstorage feedback" + items);
			// 	StudyHours = items.STimeHours;
			// 	console.log("local storage studyhours: " + StudyHours);
			// });
			// chrome.storage.local.set({'STimeMinutes' : inputtedSTimeMinutes}, function() {
			// 	chrome.storage.sync.get("STimeMinutes", function(data) {
		 //      		console.log("data", data);
		 //    	});
			// });
			// chrome.storage.local.set({'CTimeHours' : inputtedCTimeHours}, function() {
			// 	chrome.storage.sync.get("CTimeHours", function(data) {
		 //      		console.log("data", data);
		 //    	});
			// });
			// chrome.storage.local.set({'CTimeMinutes' : inputtedCTimeMinutes}, function() {
			// 	chrome.storage.sync.get("CTimeMinutes", function(data) {
			//   		console.log("data", data);
			// 	});
			// });
	}, 10000);
	
	chrome.extension.sendMessage("test");
	// time_string = inputtedSTimeHours + " " +inputtedSTimeMinutes 
	// 				+ " " +inputtedCTimeHours " " + inputtedCTimeMinutes;

	// alert(time_string);
	// chrome.runtime.sendMessage(time_string);
});
