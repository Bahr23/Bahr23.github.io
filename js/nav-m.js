$(document).ready(function() {
	$('.icon').click(function(event) {
		$('.icon').toggleClass('active');
		$('.nav-m').toggleClass('active');
		$('.overlay').toggleClass('active');
	});
	$('.overlay').click(function(event) {
		$('.icon').toggleClass('active');
		$('.nav-m').toggleClass('active');
		$('.overlay').toggleClass('active');
	});
});