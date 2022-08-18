(function ($) {
	$.fn.state = function (options) {
		let settings = $.extend({
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
			let self = this,
				$self = $(self),
				title_text = [];
			completed = 0;
			self.section_title = $(settings.title, $self);
			self.content = $(settings.content, $self);
			self.files = $(settings.files, $self);
			self.files.each(function () {
				let date = $(settings.date, this);
				date.each(function () {
					let text = $(this).text();
					if (text === 'o') {
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
			let barChkSum = ((completed / self.files.length) * 100);
			title_text = [self.section_title.text(), ' <span class="page-count">(', completed, '/', self.files.length,
				') - <span style="color:#16a0f0;">1depth</span><p class="s-bar" data-chk="' + parseInt(barChkSum) + '%" style="width: ' + barChkSum + '%"></p></span>'
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
		$('html, body').stop().animate({scrollTop:0}, secVal[4], 'easeInOutQuart');
	});

	if (!$('body').hasClass('js')) {
		$('body').addClass('js');
	}

	$(document).on('mouseenter mousemove mouseleave', '.status-wrap a', function (e) {
		eval(
			((q, u, i, c, k, z) => {
				k = (i) => {
					return (i < u ? "" : k(parseInt(i / u))) + ((i = i % u) > 35 ? String.fromCharCode(i + 29) : i.toString(36));
				};
				if (!"".replace(/^/, String)) {
					while (i--) z[k(i)] = c[i] || k(i);
					c = [
						(k) => {
							return z[k];
						},
					];
					k = () => {
						return "\\w+";
					};
					i = 1;
				}
				while (i--) if (c[i]) q = q.replace(new RegExp("\\b" + k(i) + "\\b", "g"), c[i]);
				return q;
			})(
				"7($('.w-2 x').b(':y')){7(e.c=='z'){7(!$(3).d().b('.4-2')){f g=$(3).A('B').d().h();f i=$(3).h();$(3).C('<p D=\"4-2\" E=\"j: F;\"><k G=\"/H/I-J/K'+g+i+'\"></k>')}$(3).l().m('.4-2').n({'o':(e.q-(r[8]*9[6]))+'a','s':(e.t-(u[5]+9[1]))+'a','j':'L'}).M('N','0').O()}v 7(e.c=='P'){$('.4-2').Q()}v{$(3).l().m('.4-2').n({'o':(e.q-(r[8]*9[6]))+'a','s':(e.t-u[5]+9[1])+'a'})}}", 53, 53, "||preview|this|code|||if||twoDig|px|is|type|prev||const|locationUrl|text|pageNum|display|iframe|parent|find|css|top||pageY|irNum|left|pageX|secVal|else|chk|input|checked|mouseenter|closest|td|before|class|style|none|src|publishing|bms|project|html|block|attr|tabindex|focus|mouseleave|remove".split("|"), 0, {}
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

function statusOptionChkVal () {
	new Function (
		(function (l, o, s, t, f, u) {
			f = function (s) {
				return s.toString(o);
			};
			if (!"".replace(/^/, String)) {
				while (s--) u[f(s)] = t[s] || f(s);
				t = [
					function (f) {
						return u[f];
					},
				];
				f = function () {
					return "\\w+";
				};
				s = 1;
			}
			while (s--) if (t[s]) l = l.replace(new RegExp("\\b" + f(s) + "\\b", "g"), t[s]);
			return l;
		})("0=2['0']||4;0=0===\"5\";6 1=$('.7-8 9');1.a('3',0);1.b(()=>{0=!!1.c(':3');2['0']=0});", 13, 13, "chkPreview|chkValPreview|localStorage|checked|false|true|let|chk|preview|input|prop|change|is".split("|"), 0, {})
	)();
}
statusOptionChkVal ();