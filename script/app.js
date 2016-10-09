$(document).ready(function(){

	$("button").on("click",function() {
	    $(".contentAside").toggle();
	    $("#boxSection").toggleClass("clicked");
	    /*$(".boxSection").animate({"width": "768px"}, "slow");*/
	});
	/*$("button").on("click", function(){
		$("boxSection").toggleClass('clicked');
	});*/

});

/*$(document).ready(function(){

	$("button").click(function() {
	    $(".contentAside").fadeToggle(function() {
			if ($(this).is(":visible")) {
				$(".boxSection").css("width" =="800px")
			} 
			else if ($(this).is(":hidden")) {
				alert("hidden")
			}
		});
	});



});*/