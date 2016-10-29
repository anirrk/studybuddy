var input = document.createElement("input");
input.type = "text";
var list = new Array(10);


function insert(){
	list.push("input");
}

function delete(){
	var index = list.indexOf("text");
	if (index > - 1){
		list.splice(index, 1);
	}

}
