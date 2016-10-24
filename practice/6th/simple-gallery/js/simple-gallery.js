var gallery	= document.querySelector('.simple-photo-gallery');
var gallery_control_buttons = gallery.querySelectorAll('button');
var view_img = gallery.querySelector('.gallery-view img');
// console.log(gallery_control_buttons[0]);


function changePhoto() {
	var el_img = this.querySelector('img');
	//var src = el_img.src; // HTML DOM
	var src = el_img.getAttribute('src');
	var alt = el_img.getAttribute('alt');
	var change_src = src.replace('thumbs', 'big');
	view_img.setAttribute('src', change_src);
	view_img.setAttribute('alt', alt);
}


for (var i = 0; gallery_control_buttons.length > i; i++) {
	gallery_control_buttons[i].onclick = changePhoto;
}