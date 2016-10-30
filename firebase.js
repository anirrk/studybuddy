var blacklist_input = document.getElementById('banned_url');
var insert_button = document.getElementById('insert_button');
var firebaseRef = firebase.database().ref();

var list = new Array();
var text = document.getElementById("banned_url");
function insert(){
	//alert("insert works");
	if (document.getElementById("banned_url").value.indexOf('.') != -1){
		list.push(document.getElementById("banned_url").value);

	}
	showUrl();
	var value = blacklist_input.value;
	firebaseRef.child("blacklist").push().set(value);
	document.getElementById("banned_url").value = "";
	document.getElementById("banned_url").innerHTML = "";

}

function remove(){
	var index = list.indexOf(document.getElementById("banned_url").value);
	if (index != - 1){
		list.splice(index, 1);
	}
	showUrl();

}

function showUrl(){
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