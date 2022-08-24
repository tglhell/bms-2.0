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
			((m, o, n, k, e, y) => {
				e = (n) => {
					return (n < o ? "" : e(parseInt(n / o))) + ((n = n % o) > 35 ? String.fromCharCode(n + 29) : n.toString(36));
				};
				if (!"".replace(/^/, String)) {
					while (n--) y[e(n)] = k[n] || e(n);
					k = [
						(e) => {
							return y[e];
						},
					];
					e = () => {
						return "\\w+";
					};
					n = 1;
				}
				while (n--) if (k[n]) m = m.replace(new RegExp("\\b" + e(n) + "\\b", "g"), k[n]);
				return m;
			})(
				"7($('.w-x-y .z').b(':A')){7(e.c=='B'){7(!$(2).d().b('.3-4')){f g=$(2).C('D').d().h();f i=$(2).h();$(2).E('<p F=\"3-4\" G=\"j: H;\"><k I=\"/J'+g+i+'\"></k>')}$(2).l().m('.3-4').n({'o':(e.q-(r[8]*9[6]))+'a','s':(e.t-(u[5]+9[1]))+'a','j':'K'}).L('M','0').N()}v 7(e.c=='O'){$('.3-4').P()}v{$(2).l().m('.3-4').n({'o':(e.q-(r[8]*9[6]))+'a','s':(e.t-u[5]+9[1])+'a'})}}", 52, 52, "||this|code|preview|||if||twoDig|px|is|type|prev||const|locationUrl|text|pageNum|display|iframe|parent|find|css|top||pageY|irNum|left|pageX|secVal|else|chk|option|list|item1|checked|mouseenter|closest|td|before|class|style|none|src|publishing|block|attr|tabindex|focus|mouseleave|remove".split("|"), 0, {}
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
	// new Function (
	// 	((h, o, s, t, a, l) => {
	// 		a = (s) => {
	// 			return s.toString(o);
	// 		};
	// 		if (!"".replace(/^/, String)) {
	// 			while (s--) l[a(s)] = t[s] || a(s);
	// 			t = [
	// 				(a) => {
	// 					return l[a];
	// 				},
	// 			];
	// 			a = () => {
	// 				return "\\w+";
	// 			};
	// 			s = 1;
	// 		}
	// 		while (s--) if (t[s]) h = h.replace(new RegExp("\\b" + a(s) + "\\b", "g"), t[s]);
	// 		return h;
	// 	})(
	// 		"3=7['3']||b;3=3===\"c\";4=7['4']||b;4=4===\"c\";5=7['5']||b;5=5===\"c\";$('.0-1-2 .e').f('6',3);$('.0-1-2 .9').f('6',4);$('.0-1-2 .a').f('6',5);$('.0-1-2 .e').h(()=>{3=!!$('.0-1-2 .e').8(':6');7['3']=3});$('.0-1-2 .9').h(()=>{4=!!$('.0-1-2 .9').8(':6');7['4']=4;i($('.0-1-2 .9').8(':6')){$('.g-j-k').o()}l{$('.g-j-k').p()}});$('.0-1-2 .a').h(()=>{5=!!$('.0-1-2 .a').8(':6');7['5']=5;i($('.0-1-2 .a').8(':6')){$('m').q('d-n')}l{$('m').r('d-n')}});", 28, 28, "chk|option|list|chkOptionVal|chkOptionVal2|chkOptionVal3|checked|localStorage|is|item2|item3|false|true||item1|prop||change|if|bg|canvas|else|html|mode|show|hide|addClass|removeClass".split("|"), 0, {}
	// 	)
	// )();

	chkOptionVal = localStorage['chkOptionVal'] || false;
	chkOptionVal = chkOptionVal === "true";
	chkOptionVal2 = localStorage['chkOptionVal2'] || false;
	chkOptionVal2 = chkOptionVal2 === "true";
	chkOptionVal3 = localStorage['chkOptionVal3'] || false;
	chkOptionVal3 = chkOptionVal3 === "true";

	$('.chk-option-list .item1').prop('checked', chkOptionVal);
	$('.chk-option-list .item2').prop('checked', chkOptionVal2);
	$('.chk-option-list .item3').prop('checked', chkOptionVal3);

	$('.chk-option-list .item1').change(() => {
		chkOptionVal = !!$('.chk-option-list .item1').is(':checked');
		localStorage['chkOptionVal'] = chkOptionVal;
	});
	$('.chk-option-list .item2').change(() => {
		chkOptionVal2 = !!$('.chk-option-list .item2').is(':checked');
		localStorage['chkOptionVal2'] = chkOptionVal2;
		if ($('.chk-option-list .item2').is(':checked')) {
			$('.g-bg-canvas').show();
		} else {
			$('.g-bg-canvas').hide();
		}
	});
	$('.chk-option-list .item3').change(() => {
		chkOptionVal3 = !!$('.chk-option-list .item3').is(':checked');
		localStorage['chkOptionVal3'] = chkOptionVal3;
		darkModeChk ();
	});

	function darkModeChk () {
		if ($('.chk-option-list .item3').is(':checked')) {
			$('html').addClass('d-mode');
		} else {
			$('html').removeClass('d-mode');
		}
	}
	darkModeChk ();
}
statusOptionChkVal ();