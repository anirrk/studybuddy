var inputtedSTimeHours;
var inputtedSTimeMinutes;
var inputtedCTimeHours;
var inputtedCTimeMinutes;

var enterButton = document.getElementById("enterButton");
enterButton.addEventListener('click', function() {
	inputtedSTimeHours = document.getElementById("studyInputHours").value;
	inputtedSTimeMinutes = document.getElementById("studyInputMins").value;
	inputtedCTimeHours = document.getElementById("chillInputHours").value;
	inputtedCTimeMinutes = document.getElementById("chillInputMins").value;
});

storage.setItem(Hours, inputtedSTimeHours);