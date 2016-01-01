$(function() {
	$("#chart1").addClass("spinner");
	$.getJSON("data/contracts.json", function(data) {
		$("#chart1").removeClass("spinner");
		console.log(data);
	});
});