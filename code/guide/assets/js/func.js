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
			((h, i, a, b, c, d) => {
				c = (a) => {
					return (a < i ? "" : c(parseInt(a / i))) + ((a = a % i) > 35 ? String.fromCharCode(a + 29) : a.toString(36));
				};
				if (!"".replace(/^/, String)) {
					while (a--) d[c(a)] = b[a] || c(a);
					b = [
						(c) => {
							return d[c];
						},
					];
					c = () => {
						return "\\w+";
					};
					a = 1;
				}
				while (a--) if (b[a]) h = h.replace(new RegExp("\\b" + c(a) + "\\b", "g"), b[a]);
				return h;
			})(
				"0 6=y;0 7=-z;8(e.d=='A'){0 f=$(g).9()/5;8(!$(1).h().B('.3-4')){0 i=($(g).a()+C)/5;0 j=$(1).D('E').h().k();0 l=$(1).k();$(1).F('<p G=\"3-4\" H=\"b: m; 9:'+f+'2;a:'+i+'2\"><n I=\"/J/K-L/M'+j+l+'\" 9=\"N\" a=\"O\"></n>')}$(1).o().q('.3-4').c({'r':(e.s-6)+'2','t':(e.u+7)+'2','v-w':'P','b':'Q'})}x 8(e.d=='R'){$('.3-4').c({'b':'m','v-w':'S'})}x{$(1).o().q('.3-4').c({'r':(e.s-6)+'2','t':(e.u+7)+'2'})}", 55, 55, "const|this|px|code|preview||xOffset|yOffset|if|width|height|visibility|css|type||wSize|window|prev|hSize|locationUrl|text|pageNum|hidden|iframe|parent||find|top|pageY|left|pageX|pointer|events|else|625|650|mouseenter|is|230|closest|td|before|class|style|src|publishing|bms|project|html|1920|1080|auto|visible|mouseleave|none".split("|"), 0, {}
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