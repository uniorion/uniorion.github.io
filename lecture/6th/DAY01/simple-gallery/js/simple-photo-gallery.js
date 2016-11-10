 
var gallery                 = document.querySelector('.simple-photo-gallery');
var gallery_control_buttons = gallery.querySelectorAll('button');
var gallery_view            = gallery.querySelector('.gallery-view');

var chageGalleryView = function(){
  var img         = this.querySelector('img');
  var view        = gallery_view.querySelector('img');
  // var src      = img.src; // HTML DOM
  var src         = img.getAttribute('src');
  var alt         = img.getAttribute('alt');
  var changed_src = src.replace('thumbs', 'big');
  view.setAttribute('src', changed_src);
  view.setAttribute('alt', alt);
};

for (var i = 0; gallery_control_buttons.length > i; i++) {
  gallery_control_buttons[i].onclick = chageGalleryView;
}