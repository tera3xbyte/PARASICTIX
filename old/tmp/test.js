let cond = true;
$(".button").click(function(){
	if ( cond == true ) {
		$("p").hide();
		cond = false;
		alert("hello")
	} else {
		$("p").show();
		cond = true;
	}
})



