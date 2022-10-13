export default function wufooScript(d, t) {
	var rt2tdqd0lcp3yx;
	var s = d.createElement(t),
		options = {
			userName: 'firstchurchcarrollton',
			formHash: 'rt2tdqd0lcp3yx',
			autoResize: true,
			height: '1163',
			async: true,
			host: 'wufoo.com',
			header: 'show',
			ssl: true,
		};
	s.src =
		('https:' == d.location.protocol ? 'https://' : 'http://') +
		'secure.wufoo.com/scripts/embed/form.js';
	s.onload = s.onreadystatechange = function () {
		var rs = this.readyState;
		if (rs) if (rs != 'complete') if (rs != 'loaded') return;
		try {
			rt2tdqd0lcp3yx = new WufooForm();
			rt2tdqd0lcp3yx.initialize(options);
			rt2tdqd0lcp3yx.display();
		} catch (e) {}
	};
	var scr = d.getElementsByTagName(t)[0],
		par = scr.parentNode;
	par.insertBefore(s, scr);
}
