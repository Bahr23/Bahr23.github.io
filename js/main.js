$(document).ready(function() {
	console.log('jqery is running');
});

function sendMessage() {
	var message = $('.message').val();
	var name = $('.nick').val();
	console.log(name + ': ' + message);
	$('.message').val('');
	renderMessage(name, message);
}

function renderMessage(name, message) {
	$(".messages-list").append("<li><div class='name'>" + name + "</div><div class='msg'>" + message + "</div></li>");
}