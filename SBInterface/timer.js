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
var temp;

// Testing cookies
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
setCookie("flavor", "vanilla", 10);

var extraButton = document.getElementById("extraButton");
extraButton.addEventListener('click', function() {
	inputtedSTimeHours = document.getElementById("studyInputHours").value;
	inputtedSTimeMinutes = document.getElementById("studyInputMins").value;
	inputtedCTimeHours = document.getElementById("chillInputHours").value;
	inputtedCTimeMinutes = document.getElementById("chillInputMins").value;
	
	firebaseRef.child("storage").set({
	  STimeHours: inputtedSTimeHours,
	  STimeMinutes: inputtedSTimeMinutes,
	  CTimeHours : inputtedCTimeHours,
	  CTimeMinutes : inputtedCTimeMinutes
	});

});

function convertTime(Hours, Mins) {
	return parseInt(Hours) * 36000 + parseInt(Mins) * 60;
}

document.getElementById('enterButton').addEventListener('click', function() {
	setCookie("ST", convertTime(inputtedSTimeHours, inputtedSTimeMinutes).toString(), 1);
	setCookie("CT", convertTime(inputtedCTimeHours, inputtedCTimeMinutes) + "", 1);
});

/*setCookie("ST", convertTime(inputtedSTimeHours, inputtedSTimeMinutes).toString(), 1);
setCookie("CT", convertTime(inputtedCTimeHours, inputtedCTimeMinutes) + "", 1);*/