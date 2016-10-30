var blacklist_input = document.getElementById('banned_url');
var insert_button = document.getElementById('insert_button');
var firebaseRef = firebase.database().ref();

insert_button.addEventListener('click',function(){
	var value = blacklist_input.value;
	firebaseRef.child("blacklist").set(value);
});