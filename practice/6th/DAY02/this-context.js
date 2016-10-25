function getName () {
	console.log(this.name);
}

var cam = {
	'use': 'CCTV',
	'where': 'Fast Campus Room'
};

cam.name = '패캠 감시캠';

cam.getNamae = getName;

cam.getNamae();