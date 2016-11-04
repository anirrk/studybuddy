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

chrome.runtime.sendMessage({method:"getWord"},function(response){
  //here response will be the word you want
  console.log(response);
});

chrome.tabs.onActivated.addListener(function(activeInfo){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        var processed_url = find_domain(url);
        // alert(processed_url);
    });
});



function find_domain(str){
    var y = str.indexOf('/');
    for (x = y+2; x <str.length; x++) {
        if(str[x] == '/'){
            break;
        }
    }
    var sub_string = str.substring(y,x);
    var last_period = sub_string.lastIndexOf('.');
    var i;
    for ( i = last_period-1; i >= 0; i--) {
        if((str[i] == '.')||(str[i]=='/') ){
            i++;
            break;
        }
    }
    var j = last_period;
    while((str[j] != '/' )&& (j != str.length-1) ){
        j++;
    }
    var final_url = str.substring(i,j);
    return final_url;
}










