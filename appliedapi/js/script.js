$(document).ready(function() {
  var key = "29c18d97ffd74987858232042171503";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=NYC";

	$.getJSON(url, function(data) {
	console.log(data);
	$("#weather").addClass("cold");
	 if (data["current"]["temp_f"]  > 60) {
	 	$("#weather").html("COLD");
	} else {
	$("#weather").html("HOT");
		$("#weather").addClass("hot");
}
	});
});



// 	// ["current"]["temp_f"]); //put this whole thing in html div weather//
// 	$("#weather").html(data["current"]["temp_f"]); //put this into weather div//
// if (data["current"]["temp_f"] < 50) {
// 	$("#weather").html("Wear a Jacket!");
// } else {
// 	$("#weather").html("No Jacket Needed!");

	// $("#wind").html(data["condition"]["wind_mph"]);


/*
    Get weather API key at
    https://www.apixu.com/signup.aspx
*/