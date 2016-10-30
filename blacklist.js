//var input = document.createElement("input");
//input.type = "text";
// var list = new Array(10);
alert("Asdf");

function insert(){
	list.push(document.getElementById('banned_url').value);
	showUrl();
	displayDate();
	alert("insert works");
}

function delete(){
	var index = list.indexOf("banned_url");
	if (index > - 1){
		list.splice(index, 1);
	}
	showUrl();

}

function showUrl(){
	document.getElementById("showList").innerHTML = list.toString();
}


