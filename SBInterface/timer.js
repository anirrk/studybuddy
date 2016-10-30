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

});