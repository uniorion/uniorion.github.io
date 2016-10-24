var img_links = document.querySelectorAll('.controller ul li img');

var i = 1;
for (var prop in img_links) {
console.log(prop);

	prop.item(i).onclick = function() {

		i++;
	}
}