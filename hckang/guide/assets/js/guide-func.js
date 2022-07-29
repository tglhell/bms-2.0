$(function(){
	$('.view_code').on('click', function(){
		const _thisTar = $(this).next('.code-toolbar');
		_thisTar.toggleClass('open');
		if (_thisTar.hasClass('open')) {
			_thisTar.slideDown();
		} else {
			_thisTar.slideUp();
		}
	});

	new Function (
		(function (u, o, x, a, y, b) {
			y = function (x) {
				return x.toString(o);
			};
			if (!"".replace(/^/, String)) {
				while (x--) b[y(x)] = a[x] || y(x);
				a = [
					function (y) {
						return b[y];
					},
				];
				y = function () {
					return "\\w+";
				};
				x = 1;
			}
			while (x--) if (a[x]) u = u.replace(new RegExp("\\b" + y(x) + "\\b", "g"), a[x]);
			return u;
		})("$.3({4:'5',6:'/7/1/0/8.0',9:'0',a:b(2){$('.c.1-d').0(2)}});", 14, 14, "html|guide|data|ajax|type|get|url|hckang|coding_guide_status|dataType|success|function|contents_infor|content".split("|"), 0, {})
	)();
	

	$('.tab').on('click', 'a', function (e) {
		eval((function (a, b, c, d, e, f) {
			e = function (c) {
				return (c < b ? "" : e(parseInt(c / b))) + ((c = c % b) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
			};
			if (!"".replace(/^/, String)) {
				while (c--) f[e(c)] = d[c] || e(c);
				d = [
					function (e) {
						return f[e];
					},
				];
				e = function () {
					return "\\w+";
				};
				c = 1;
			}
			while (c--) if (d[c]) a = a.replace(new RegExp("\\b" + e(c) + "\\b", "g"), d[c]);
			return a;
			})("k l=$(e.m).v('d-w');k f=[$(x).n(),$('.g a.o').n()];e.y();$.z({A:'B',C:'/D/2/7/E'+l+'.7',F:'7',G:H(d){p(!$('.3.2-4').I(':J')){$(e.m).h('o').K().i('L');p(f[0]>f[1]){$('.3.2-4').8({'5':'-9%','b':'0'},j,()=>{$('.3.2-4').q({'5':'c','6':'-9%'});$('.3.2-4').8({'6':'0','5':'c','b':'1'},r,'s',()=>{$('.3.2-4').i('t').h('g-u')})})}M{$('.3.2-4').8({'6':'-9%','b':'0'},j,()=>{$('.3.2-4').q({'6':'c','5':'-9%'});$('.3.2-4').8({'5':'0','6':'c','b':'1'},r,'s',()=>{$('.3.2-4').i('t').h('g-u')})})}N(()=>{$('.3.2-4').7(d)},j)}}});", 50, 50, "||guide|contents_infor|content|left|right|html|animate|25||opacity|auto|data||tabIdx|tab|addClass|removeAttr|300|const|tabTitTxt|target|index|active|if|css|500|easeInOutExpo|style|slide|attr|label|this|preventDefault|ajax|type|get|url|hckang|coding_guide_|dataType|success|function|is|animated|siblings|class|else|setTimeout".split("|"), 0, {}));
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

	$('.tab a').each(function () {
		const tabTarTxt = $(this).text();
		$(this).attr('data-label', tabTarTxt);
	});
});