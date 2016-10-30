// initialize firebase
// Initialize Firebase
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

var firebaseRef = firebase.database().ref();
var double = false;
//const ulList = document.getElementById('list');

var list = new Array();
var text = document.getElementById("banned_url");

insert_button.addEventListener('click',function(){

// function insert(){
	//alert("insert works");
	var value = blacklist_input.value;
	for (var i = 0; i < list.length; i++){
		if (document.getElementById("banned_url").value === list[i]){
			double = true;
		}
	}
	if (document.getElementById("banned_url").value.indexOf('.') !== -1 &&
		double === false){
		list.push(document.getElementById("banned_url").value);
		firebaseRef.child("blacklist").push().set(value);

	}
	showUrl();
	document.getElementById("banned_url").value = ""; //empty the textbox
	document.getElementById("banned_url").innerHTML = "";

// }
});

remove_button.addEventListener('click',function(){


	var index = list.indexOf(blacklist_input.value);
	if (index != - 1){
		list.splice(index, 1);
	}
	showUrl();

});

function showUrl(){

		const ulList = document.getElementById('blist');
	
		var rootRef = firebaseRef.child("blacklist");

		rootRef.on("child_added", snap => {

		//var website = snap.val();

		//$("#showList").append(website)

		const li = document.createElement('li');
		li.innerText = snap.val();
		ulList.appendChild(li); 

	});
	
	document.getElementById("showList").innerHTML = "";
	for (var i = 0; i < list.length; i++){
		document.getElementById("showList").innerHTML += list[i] + "<br>" ;
		console.log(list[i]);
	}
}

// insert_button.addEventListener('click',function(){
// 	var value = blacklist_input.value;
// 	firebaseRef.child("blacklist").push().set(value);
// });