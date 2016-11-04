//Created by ethan-yu0503
var config = {
  apiKey: "AIzaSyCtdpDh3QN2AAyDF1LDg7bn2XRWrJ0KMm0",
  authDomain: "firstproject-e8124.firebaseapp.com",
  databaseURL: "https://firstproject-e8124.firebaseio.com",
  storageBucket: "firstproject-e8124.appspot.com",
  messagingSenderId: "340933151333"
};
firebase.initializeApp(config);


var blacklist_input = document.getElementById("banned_url");
var insert_button = document.getElementById('insert_button');
var remove_button = document.getElementById('remove_button');
var refreshList = document.getElementById('refreshList');

var firebaseRef = firebase.database().ref();
var firebaseRefB = firebase.database().ref("blacklist");
var double = false;
//const ulList = document.getElementById('list');
const ulList2 = document.getElementById('listTemp');

var list = new Array();
var text = document.getElementById("banned_url");
var listData = new Array();
showUrl();
load_data2();



insert_button.addEventListener('click',function(){

	
	var website = blacklist_input.value;
	for (var i = 0; i < list.length; i++){
		if (website === list[i]){ //document.getElementById("banned_url").value = website
			double = true;
		}
	}
	/*for (var i = 0; i < listData.length; i++){
		if (website === listData[i]){
			double = true;
		}
	}
	*/
	
	if (blacklist_input.value.indexOf('.') !== -1 &&
		double === false){
		var last_period = website.lastIndexOf('.');
		var first_period = website.lastIndexOf('.', last_period - 1);
		var new_website = website.substring(first_period + 1);
		list.push(new_website);
		firebaseRef.child("blacklist").push().set(new_website);

	}
	showUrlTemp();
	document.getElementById("banned_url").value = ""; //empty the textbox
	document.getElementById("banned_url").innerHTML = "";

// }
});

document.getElementById('enterButton').addEventListener('click', function() {
	chrome.extension.sendMessage('triggered_background');
	// chrome.tabs.create({'url': chrome.extension.getURL('3timer.html')}, function(tab) {
 //        // Tab opened.
 //    });
});

remove_button.addEventListener('click',function(){

	var index = list.indexOf(blacklist_input.value);
	if (index !== - 1){
		list.splice(index, 1);
	}
	
	/*firebaseRefB.orderByValue().equalTo(blacklist_input).on('child_added', function(snapshot) {
  	snapshot.firebaseRefB.remove();
	});
	//removing an element from firebase:

	function removeItem(firebaseRef) {
	  firebaseRef.remove(function(error) {
	    alert(error ? "Uh oh!" : "Success!");
	  });
	}
	*/

	
	showUrlTemp();

});

function showUrl(){
		//alert("hi");

		const ulList = document.getElementById('blist');
	
		var rootRef = firebaseRef.child("blacklist");

		rootRef.on("child_added", snap => {

			const li = document.createElement('li');
			li.innerText = snap.val();
			ulList.appendChild(li); 

		});
	
}

function showArray(){

	const ulList2 = document.getElementById('listTemp');

	for (var i = 0; i < listData.length; i++){
		
		var item = document.createElement("li2");
    	item.appendChild(document.createTextNode(listData[i]));
    	ulList2.appendChild(item);
		
	}
}

function showUrlTemp(){
	document.getElementById("showList").innerHTML = "";
		for (var i = 0; i < list.length; i++){
			document.getElementById("showList").innerHTML += list[i] + "<br>" ;
			console.log(list[i]);
		}

}
/*
function load_data(){

	firebaseRef.child("blacklist").on("value", function(snapshot) {
  		snapshot.forEach(function(data) {
	    	listData.push(data.val());
		});
	});
	showArray();
};
*/

function load_data2(){
	var rootRef = firebaseRef.child("blacklist");

		rootRef.on("child_added", snap => {

			listData.push(snap.val());

		});
	showArray();
}

/*var rootRef = firebaseRef.child("blacklist");

		rootRef.on("child_added", snap => {

			childData = snap.val();

		});
	showArray();*/
/*
var i = 0;

firebaseRef.child("blacklist).orderByValue().on("value", function(snapshot) {
  snapshot.forEach(function(data) {
    childData[i] = data.val();
    i++;

  });
});*/

/*function accessData(){
	firebaseRef.child('blacklist').once('value', function(snapshot) {
  		snapshot.forEach(function(childSnapshot) {
    		childData = Snapshot.val();
  });
});
} */

// insert_button.addEventListener('click',function(){
// 	var value = blacklist_input.value;
// 	firebaseRef.child("blacklist").push().set(value);
// });