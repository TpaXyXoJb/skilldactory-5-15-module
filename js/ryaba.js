const dataURL = "https://api.myjson.com/bins/jcmhn";
//const fields = [
	//"var1",
	//"var2",
	//"var3",
	//"var4",
	//"var5",
	//"var6",
	//"speach"
//]

//function getFormValues() {
	//let obj = {};
//
	//fields.forEach(function(field) {
	//	obj[field] = $("input[name=" + field + "]")[0].value
	//});
	//return obj;
//}

function handleButton() {
	$.getJSON(dataURL,handleData);
	//$("form").hide();
	  // взять данные по dataUrl, вытащить их и передать в handleData
}

function handleData(data) {
	let message = "";
	//let obj = getFormValues();

	let var1 = $("input[name=var1")[0].value;
	let var2 = $("input[name=var2")[0].value;
	let var3 = $("input[name=var3")[0].value;
	let var4 = $("input[name=var4")[0].value;
	let var5 = $("input[name=var5")[0].value;
	let var6 = $("input[name=var6")[0].value;
	let speach = $("input[name=speach")[0].value;

	data["text"].forEach(function(item,index) {

		item = item.replace("{var1}", var1);
		item = item.replace("{var2}", var2);
		item = item.replace("{var3}", var4);
		item = item.replace("{var4}", var4);
		item = item.replace("{var5}", var5);
		item = item.replace("{var6}", var6);
		item = item.replace("{speach}", speach);


		//for (key in obj) {
			//item = item.replace("{" + key + "}", obj[key]);
		//}
		message = message + item + "<BR>";
	});
  // кажется, какой-то из этих способов сработает
  //const var1 = $("input[name=var1]")[0].value()
  //const var1 = $("input[name=var1]").value()
  //const var1 = $("input[name=var1]")[0].default()

  
	$("div#result").html(message);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
