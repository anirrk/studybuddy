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

if(inputtedSTimeHours != 1 || inputtedSTimeHours != 1 || inputtedSTimeHours != 1 || 
	inputtedSTimeHours != 1 || inputtedSTimeHours != 1 || inputtedSTimeHours != 1 || 
	inputtedSTimeHours != 1 || inputtedSTimeHours != 1 || inputtedSTimeHours != 1 || 
	inputtedSTimeHours != 1) {
	
}

// localStorage.setItem(Hours, inputtedSTimeHours);

});