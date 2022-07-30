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
		(function (h, a, l, z, i, o) {
			i = function (l) {
				return l.toString(a);
			};
			if (!"".replace(/^/, String)) {
				while (l--) o[i(l)] = z[l] || i(l);
				z = [
					function (i) {
						return o[i];
					},
				];
				i = function () {
					return "\\w+";
				};
				l = 1;
			}
			while (l--) if (z[l]) h = h.replace(new RegExp("\\b" + i(l) + "\\b", "g"), z[l]);
			return h;
		})("$.5({6:'7',8:'/9-2.0/a/3/1/b.1',c:'1',d:e(4){$('.f.3-g').1(4)}});", 17, 17, "|html||guide|data|ajax|type|get|url|bms|hckang|coding_guide_status|dataType|success|function|contents_infor|content".split("|"), 0, {})
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
			})("l m=$(e.n).w('f-x');l g=[$(y).o(),$('.h a.p').o()];e.z();$.A({B:'C',D:'/E-2.0/F/3/8/G'+m+'.8',H:'8',I:J(f){q(!$('.4.3-5').K(':L')){$(e.n).i('p').M().j('N');q(g[0]>g[1]){$('.4.3-5').9({'6':'-b%','c':'0'},k,()=>{$('.4.3-5').r({'6':'d','7':'-b%'});$('.4.3-5').9({'7':'0','6':'d','c':'1'},s,'t',()=>{$('.4.3-5').j('u').i('h-v')})})}O{$('.4.3-5').9({'7':'-b%','c':'0'},k,()=>{$('.4.3-5').r({'7':'d','6':'-b%'});$('.4.3-5').9({'6':'0','7':'d','c':'1'},s,'t',()=>{$('.4.3-5').j('u').i('h-v')})})}P(()=>{$('.4.3-5').8(f)},k)}}});", 52, 52, "|||guide|contents_infor|content|left|right|html|animate||25|opacity|auto||data|tabIdx|tab|addClass|removeAttr|300|const|tabTitTxt|target|index|active|if|css|500|easeInOutExpo|style|slide|attr|label|this|preventDefault|ajax|type|get|url|bms|hckang|coding_guide_|dataType|success|function|is|animated|siblings|class|else|setTimeout".split("|"), 0, {}));
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