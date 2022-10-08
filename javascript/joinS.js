/*전체 선택*/
function togglecheckboxes(mas,group){
	var cbarray = document.getElementsByClassName(group);
	for(var i = 0; i < cbarray.length; i++){
		var cb = document.getElementById(cbarray[i].id);
		cb.checked = mas.checked;
	}
}
/*사진 업로드*/
function setIDpicture(event) {
	var reader = new FileReader();

	reader.onload = function(event) {
	  var img = document.createElement("img");
	  img.setAttribute("src", event.target.result);
	  document.querySelector("div#ID-picture").appendChild(img);
	};
	reader.readAsDataURL(event.target.files[0]);
}

/*input[type=text]특정 타입 입력 막기*/
function characterCheck(obj){
	var regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/; 
	if( regExp.test(obj.value) ){
		alert("특수문자는 입력하실수 없습니다.");
		obj.value = obj.value.substring(0, obj.value.length - 1);
	}
}