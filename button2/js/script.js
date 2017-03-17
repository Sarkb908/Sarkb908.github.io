$(document).ready(function(){
	//ALL CODE GOES HERE
	console.log("hello there!");

	$(".button").on("mouseenter",function() {
		//HERE ARE THE HOVER INSTRUCTIONS
		$(this).addClass("focused");

	});

	$(".button").on("mouseleave", function(){ 
		//TO MAKE IT GO BACK TO UNFOCUSED
		$(this).removeClass("focused");
	});
	
	$(".button").on("click", function() { 
		//ADDS CLICK FUNCTON TO BUTTON
		$(this).toggleClass("active");
		//ADDS BACKGROUND WHEN CLICK
		$("body").toggleClass("dark"); 
		//SWITCH h1 from switch to click when click button
		$("h1").html("Remember:<br>Each moment is<br> beautiful");

	});
$("h1").on("click", function(){
	$(this).html("The greeting will<br> change depending <br>on the time of day.");
});
if (new Date().getHours() < 12) {
    document.getElementById("greeting").innerHTML = "Have a <br> wonderful day!";
}

});