(function ($) {
	$.fn.state = function (options) {
		var settings = $.extend({
				title: 'h2.s-title',
				content: 'div.content',
				files: 'tbody tr',
				date: 'td.state',
				index: 0,
				openAll: false,
				speed: 'fast'
			}, options),
			all_sections = this,
			header = $('div.header');
		return this.each(function () {
			var self = this,
				$self = $(self),
				title_text = [],
				completed = 0;
			self.section_title = $(settings.title, $self);
			self.content = $(settings.content, $self);
			self.files = $(settings.files, $self);
			self.files.each(function () {
				var date = $(settings.date, this);
				date.each(function () {
					var text = $(this).text();
					if (text) {
						completed++;
					}
				});
			});
			self.files
				.bind('mouseenter', function () {
					$(this).addClass('hover');
				})
				.bind('mouseleave', function () {
					$(this).removeClass('hover');
				});
			title_text = [self.section_title.text(), ' <span class="page-count">(', completed, '/', self.files.length,
				') - <span style="color:#16a0f0;">1depth</span><span class="s-bar"></span></span>'
			];
			self.section_title.html(title_text.join(''));
			self.section_title.bind('click', () => {
				self.content.slideToggle(settings.speed);
			});
			if (settings.openAll || ((settings.index - 1) === all_sections.index(this))) {
				self.content.css('display', 'block');
			}
		});
	};
	$(document).ready(() => {
		$('div.section').state({
			openAll: true
		});
		$('#total').text($('tbody tr').length);
		$('tbody tr:even').addClass('even');
		$('tbody td[rowspan][rowspan!=1]').addClass('multi');

		$('td:last-child .fcR').on('click', () => {
			$(this).toggleClass('on');
		});
	});
}(jQuery));

$(() => {
	$(window).scroll(() => {
		let ScrollPos = $(window).scrollTop();
		if (ScrollPos > 72) {
			$('.btn-top').addClass('active');
		} else {
			$('.btn-top').removeClass('active');
		}
	});

	$('.btn-top').on('click', () => {
		$('html, body').stop().animate({scrollTop:0}, 500, 'easeInOutQuart');
	});

	if (!$('body').hasClass('js')) {
		$('body').addClass('js');
	}

	$(document).on('mouseenter mousemove mouseleave', '.status-wrap a', function (e) {
		eval(
			((h, i, l, o, a, d) => {
				a = (l) => {
					return (l < i ? "" : a(parseInt(l / i))) + ((l = l % i) > 35 ? String.fromCharCode(l + 29) : l.toString(36));
				};
				if (!"".replace(/^/, String)) {
					while (l--) d[a(l)] = o[l] || a(l);
					o = [
						(a) => {
							return d[a];
						},
					];
					a = () => {
						return "\\w+";
					};
					l = 1;
				}
				while (l--) if (o[l]) h = h.replace(new RegExp("\\b" + a(l) + "\\b", "g"), o[l]);
				return h;
			})(
				"1 7=x;1 8=-y;9(e.f=='z'){1 g=$(h).a()/5;9(!$(2).i().A('.4-6')){1 j=($(h).b()+B)/5;1 k=$(2).C('D').i().l();1 m=$(2).l();$(2).E('<p F=\"4-6\" G=\"c: n; a:'+g+'3; b:'+j+'3\"><o H=\"/I/J-K/L'+k+m+'\" a=\"M\" b=\"N\"></o>')}$(2).q().r('.4-6').d({'s':(e.t-7)+'3','u':(e.v+8)+'3','c':'O'}).P('Q','0').R()}w 9(e.f=='S'){$('.4-6').d({'c':'n'})}w{$(2).q().r('.4-6').d({'s':(e.t-7)+'3','u':(e.v+8)+'3'})}", 55, 55, "|const|this|px|code||preview|xOffset|yOffset|if|width|height|display|css||type|wSize|window|prev|hSize|locationUrl|text|pageNum|none|iframe||parent|find|top|pageY|left|pageX|else|625|650|mouseenter|is|230|closest|td|before|class|style|src|publishing|bms|project|html|1920|1080|block|attr|tabindex|focus|mouseleave".split("|"), 0, {}
			)
		);
	});
});

new Function (
  ((a, b, c, d, e, f) => {
		e = String;
		if (!"".replace(/^/, String)) {
			while (c--) f[c] = d[c] || c;
			d = [
				(e) => {
					return f[e];
				},
			];
			e = () => {
				return "\\w+";
			};
			c = 1;
		}
		while (c--) if (d[c]) a = a.replace(new RegExp("\\b" + e(c) + "\\b", "g"), d[c]);
		return a;
  })("$.1('/2/3/4/5/0/6-7.0');", 8, 8, "js|getScript|publishing|code|guide|assets|p|func".split("|"), 0, {})
)();