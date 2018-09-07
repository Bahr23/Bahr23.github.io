$(document).ready(function() {
	$('.btn').click(function(event) {
		var a = Number($('#in-1').val());
		var b = Number($('#in-2').val());
		var c = Number($('#in-3').val());

		if (a == 8 & b == 9 & c == 1975) {
			$('.win-msg').toggleClass('active');
		}
	});
});
