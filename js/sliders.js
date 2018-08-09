$('.slider-port').slick({
	dots: false,
	infinite: true,
	variableWidth: false,
	arrows: false,
	speed: 300,
	slidesToShow: 1,
	asNavFor: '.slider-description'
});

$('.slider-description').slick({
	dots: false,
	infinite: true,
	fade: true,
	variableWidth: false,
	arrows: false,
	speed: 300,
	slidesToShow: 1,
	asNavFor: '.slider-port',
	responsive: [
	  	{
	  		breakpoint: 575,
	  		settings: {
	  			adaptiveHeight: true
	  		}
	  	}
  	]
});

$('.slick-port-next').click(function(event) {
	$('.slider-port').slick('slickNext');
});

$('.slick-port-prev').click(function(event) {
	$('.slider-port').slick('slickPrev');
});



// -------------------------------------------


$('.slider-persons-title').slick({
	dots: false,
  	infinite: true,
  	fade: true,
  	variableWidth: false,
  	arrows: false,
  	speed: 300,
  	slidesToShow: 1,
  	asNavFor: '.slider-persons-subtitle'
});

$('.slider-persons-subtitle').slick({
	dots: false,
  	infinite: true,
  	fade: false,
  	variableWidth: false,
  	arrows: false,
  	speed: 300,
  	slidesToShow: 1,
  	asNavFor: '.slider-persons-title',
  	responsive: [
	  	{
	  		breakpoint: 575,
	  		settings: {
	  			adaptiveHeight: true
	  		}
	  	}
  	]
});

$('.slick-persons-prev').click(function(event) {
	$('.slider-persons-subtitle').slick('slickPrev');
});

$('.slick-persons-next').click(function(event) {
	$('.slider-persons-subtitle').slick('slickNext');
});
