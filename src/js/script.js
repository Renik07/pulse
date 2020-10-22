$(document).ready(function(){
  $('.carousel__inner').slick({
		infinite: true,
		speed: 1200,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/arrow-left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/arrow-right.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					infinite: true,
					dots: true,
					arrows: false
				}
			}
		]
	});
});