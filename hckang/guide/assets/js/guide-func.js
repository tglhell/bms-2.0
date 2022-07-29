$(function(){
	const tabParentTar = $('.contents_infor.guide-content');
	$('.view_code').on('click', function(){
		const _thisTar = $(this).next('.code-toolbar');
		_thisTar.toggleClass('open');
		if (_thisTar.hasClass('open')) {
			_thisTar.slideDown();
		} else {
			_thisTar.slideUp();
		}
	});

	$.ajax({
		type: 'get',
		url: '/hckang/guide/html/coding_guide_status.html',
		dataType : 'html',
		success: function(data) {
			tabParentTar.html(data);
		}
	});

	$('.tab').on('click', 'a', function (e) {
		const tabTitTxt = $(e.target).attr('data-label');
		const tabIdx = [$(this).index(), $('.tab a.active').index()];
		e.preventDefault();
		$.ajax({
			type: 'get',
			url: '/hckang/guide/html/coding_guide_' + tabTitTxt + '.html',
			dataType : 'html',
			success: function(data) {
				if (!tabParentTar.is(':animated')) {
					$(e.target).addClass('active').siblings().removeAttr('class');
					if (tabIdx[0] > tabIdx[1]) {
						tabParentTar.animate({'left':'-25%', 'opacity':'0'}, 300, () => {
							tabParentTar.css({'left':'auto', 'right':'-25%'});
							tabParentTar.animate({'right':'0', 'left':'auto', 'opacity':'1'}, 500, 'easeInOutExpo', () => {
								$('.contents_infor.guide-content').removeAttr('style').addClass('tab-slide');
							});
						});
					} else {
						tabParentTar.animate({'right':'-25%', 'opacity':'0'}, 300, () => {
							tabParentTar.css({'right':'auto', 'left':'-25%'});
							tabParentTar.animate({'left':'0', 'right':'auto', 'opacity':'1'}, 500, 'easeInOutExpo', () => {
								$('.contents_infor.guide-content').removeAttr('style').addClass('tab-slide');
							});
						});
					}
					setTimeout(() => {
						tabParentTar.html(data);
					}, 300);
				}
			}
		});
	});

	if ($('.btn-top').length !== null) {
		$(window).scroll(function () {
			var ScrollPos = $(window).scrollTop();
			if (ScrollPos > 72) {
				$('.btn-top').addClass('active');
			} else {
				$('.btn-top').removeClass('active');
			}
		});
	}

	$('.btn-top').on('click', function () {
		$('html, body').stop().animate({scrollTop:0}, 500, 'easeInOutCirc');
	});

	function addDataText () {
		$('.tab a').each(function () {
			const tabTarTxt = $(this).text();
			$(this).attr('data-label', tabTarTxt);
		});
	}
	addDataText ();
});