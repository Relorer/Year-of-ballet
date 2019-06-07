$(function() {
	$('.owl-carousel').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<img src="img/arrow-slider-left.svg">', '<img src="img/arrow-slider-right.svg">'],
		responsiveClass: true,
		responsive: {
			0: { items: 1 }
		},
		dots: true
	});
	function onResize() {
		$('.ballerinas-slide').equalHeights();
	}onResize();
	window.onresize = function() {
		if (screen.width >= '768') {
			onResize()
		};
	};

	//feedback
	var name = false, mail= false, message = false;
	function providedCautionOf() {
		if((name == true) && (mail == true) && (message == true)) {
			$('.isfeedback').find('.caution-mail').css({'display' : 'none'});
			$('.isfeedback').find('.caution-standart').css({'display' : 'none'});
		};
	}
	$(document).ready(function() {
		$('.mail').blur(function() {
			if($(this).val() != '') {
				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
				if(pattern.test($(this).val())){
					$(this).css({'border' : '2px solid #569b44'});
					$('.caution-mail').css({'display' : 'none'});
					mail = true;
					providedCautionOf();
				} else {
					$(this).css({'border' : '2px solid #f33'});
					if ($('.caution-standart').css('display') == 'none') $('.caution-mail').css({'display' : 'block'});
					mail = false;
				}
			} else {
				$(this).css({'border' : '2px solid #fff'});
				$('.caution-mail').css({'display' : 'none'});
				mail = false;
			}
		});
	});
	$(document).ready(function() {
		$('.name').blur(function() {
			if($(this).val() != '') {
				$(this).css({'border' : '2px solid #569b44'});
				name = true;
				providedCautionOf();
			} else {
				$(this).css({'border' : '2px solid #fff'});
				name = false;
			}
		});
	});
	$(document).ready(function() {
		$('.message').blur(function() {
			if($(this).val() != '') {
				message = true;
				$(this).css({'border' : '2px solid #569b44'});
				providedCautionOf();
			} else {
				$(this).css({'border' : '2px solid #fff'});
				message = false;
			}
		});
	});

	$(document).ready(function() {
		$('button').bind('click',function(){

			if((name == true) && (mail == true) && (message == true)) {
				//E-mail Ajax Send
				$("form.callback").submit(function() {
					var th = $(this);
					$.ajax({
						type: "POST",
						url: "mail.php",
						data: th.serialize()
					}).done(function() {
						$('.isfeedback').find('.full-bg').addClass('blur-active');
						$('.isfeedback').find('.before').css({'display' : 'none'});
						$('.isfeedback').find('.after').css({'display' : 'block'});
						setTimeout(function() {
							$('.isfeedback').find('input').css({'border' : '2px solid #fff'});
							$('.isfeedback').find('textarea').css({'border' : '2px solid #fff'});
							$('.isfeedback').find('.caution-mail').css({'display' : 'none'});
							$('.isfeedback').find('.caution-standart').css({'display' : 'none'});
							$('.isfeedback').find('.full-bg').removeClass('blur-active');
							th.trigger("reset");
						}, 3000);
					});
					return false;
				});
			} else {
				if ($('.caution-mail').css('display') == 'none') $('.caution-standart').css({'display' : 'block'});
				if ((name == true) && (mail == false) && (message == true) && ($('.mail').val() != '')) {
					$('.caution-standart').css({'display' : 'none'});
					$('.caution-mail').css({'display' : 'block'});
				};
				if (name == false) $('.name').css({'border' : '2px solid #f33'});
				if (mail == false) $('.mail').css({'border' : '2px solid #f33'});
				if (message == false) $('.message').css({'border' : '2px solid #f33'});
				return false;
			}

		});
	});

	//scroll-parallax
	$('.ishome').scroll(function() {
		var st = $(this).scrollTop();
		$('.trian-1').css({
			'transform' : 'translate(0%, -' + st/20 + '%) rotate(-125deg)'
		});
		$('.trian-2').css({
			'transform' : 'translate(0%, -' + st/40 + '%) rotate(100deg)'
		});
		$('.circle').css({
			'transform' : 'translate(0%, -' + st/30 + '%)'
		});
	});

	$('.isMariusPetipa').scroll(function() {
		var st = $(this).scrollTop();
		$('.trian-1').css({
			'transform' : 'translate(0%, -' + st/20 + '%) rotate(-125deg)'
		});
		$('.trian-2').css({
			'transform' : 'translate(0%, -' + st/30 + '%) rotate(-100deg)'
		});
		$('.circle').css({
			'transform' : 'translate(0%, -' + st/40 + '%)'
		});
	});

	$('.isevents').scroll(function() {
		var st = $(this).scrollTop();
		$('.trian-1').css({
			'transform' : 'translate(0%, -' + st/20 + '%) rotate(-110deg)'
		});
		$('.trian-2').css({
			'transform' : 'translate(0%, -' + st/40 + '%) rotate(-125deg)'
		});
		$('.circle').css({
			'transform' : 'translate(0%, -' + st/30 + '%)'
		});
	});

	$('.isballerinas').scroll(function() {
		var st = $(this).scrollTop();
		$('.trian-1').css({
			'transform' : 'translate(0%, -' + st/30 + '%) rotate(-140deg)'
		});
		$('.trian-2').css({
			'transform' : 'translate(0%, -' + st/20 + '%) rotate(-100deg)'
		});
		$('.circle').css({
			'transform' : 'translate(0%, -' + st/40 + '%)'
		});
	});

	$('.isfeedback').scroll(function() {
		var st = $(this).scrollTop();
		$('.trian-1').css({
			'transform' : 'translate(0%, -' + st/20 + '%) rotate(-200deg)'
		});
		$('.trian-2').css({
			'transform' : 'translate(0%, -' + st/40 + '%) rotate(135deg)'
		});
		$('.circle').css({
			'transform' : 'translate(0%, -' + st/30 + '%)'
		});
	});

	$('.isNotFound').scroll(function() {
		var st = $(this).scrollTop();
		$('.trian-1').css({
			'transform' : 'translate(0%, -' + st/40 + '%) rotate(-200deg)'
		});
		$('.trian-2').css({
			'transform' : 'translate(0%, -' + st/20 + '%) rotate(135deg)'
		});
		$('.circle').css({
			'transform' : 'translate(0%, -' + st/30 + '%)'
		});
	});
});