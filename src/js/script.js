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

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});
	
	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	/* modal */
	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn();
	});
	$('.modal__close').on('click', function() {
		$('.overlay, .modal').fadeOut();
	});
	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('.overlay, #order').fadeIn();
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
		});
	});
	/* $('.button_submit').on('click', function() {
		$('#order').fadeOut();
		$('#thanks').fadeIn();
	}); */

	/* form validation */
	function validateForms(form) {
		$(form).validate({
			rules: {
				name: 'required',
				phone: 'required',
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: 'Введите имя',
				phone: 'Введите номер телефона',
				email: {
					required: 'Введите свой почтовый адрес',
					email: 'Ваша почта должна быть формата name@domain.ru'
				}
			}
		});
	}

	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');
});