$(document).ready(function(){
	//ALL CODE GOES HERE
	console.log("hello there!");

	$(".click").on("mouseenter",function() {
		//HERE ARE THE HOVER INSTRUCTIONS
		$(this).addClass("focused");

	});