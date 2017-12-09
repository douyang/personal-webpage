$("#more").click(function() {
	$("#extended").removeClass("d-none");
	$("#more").addClass("d-none");
});
$("#less").click(function() {
	$("#extended").addClass("d-none");
	$("#more").removeClass("d-none");
});

$(".hover_group").click(function() {
	var section_name = $(this).attr('id');
		$(this).addClass("on");
		$(".hover_group:not(.on)").addClass("off");
		$('div#'+section_name).removeClass("d-none");
		if(section_name == "trad-art") {
			var $grid = $('.gallery').isotope({
				itemSelector : '.art',
			});
			// $grid.isotope('layout');
		}
		$('html, body').animate({
	        scrollTop: $('div#'+section_name).offset().top
	    }, 600);
});
$(".hide").click(function() {
	var section_name = $(this).parent().parent().attr('id');
	console.log(section_name);
	$('#'+section_name).removeClass("on");
	$('html, body').animate({
        scrollTop: $("#header").offset().top
    }, 400, function(){
		$('div#'+section_name).addClass("d-none");
		$(".hover_group").removeClass("off");
    });
});
