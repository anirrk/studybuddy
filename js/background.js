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


chrome.extension.onMessage.addListener(function(message, messageSender, sendResponse) {
	if(message == "trigger_background"){
        alert("trigger_background works!");
		var Stemp = getCookie("ST");
		// var Ctemp = getCookie("CT");

		var Stime = parseInt(Stemp);
		// var Ctime = parseInt(Ctemp);

		var interval = setInterval(function() {
			Stime--;
			// Ctime--;
			Stemp = Stime+"";
			// alert(Stemp);

			// Ctemp = Ctime+"";
			setCookie("ST",Stemp,1);
			// setCookie(CT,Ctemp,1); 
            chrome.extension.sendMessage('update_time');
		},1000);
	}
});

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    alert(url);
    for (var i = Things.length - 1; i >= 0; i--) {
        Things[i]
    };

});
