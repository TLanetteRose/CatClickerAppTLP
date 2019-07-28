// Create cats object with names and pictures

let cats =[
{
	"name": "Mozeley",
	"image": "../CatClickerV2/img/MozeleyPosing.jpg",
	"clicks": 0
},
{
	"name": "Shinxley",
	"image":'../CatClickerV2/img/ShinxleyPosing.jpg',
	"clicks": 0
}
];

function addCats() {
	let addingCats = "";
	$.each(cats, function(catIndex, cat) {
		addingCats += "<div class='cat'><div class='name'>" + cat.name + "</div><img src='" + cat.image + "' class='moves'/><div id='" + catIndex.toString() + "' class='count'>" + cat.clicks.toString() + "</div></div></div>";
	});
	$("#main").append("<div>" + addingCats + "</div>");
}

$(document).ready(function() {
	addCats();
	$(".moves").click(function(obj) {
		let elem = obj.target.parentElement.childNodes[2];
		cats[elem.id].clicks += 1;
		$("#" + elem.id).text(cats[elem.id].clicks);
	});
});













/*let cat_count = 0;

function onClick() {
	cat_count++;
	document.getElementById('cat_count').innerHTML = 'Clicks: ' + cat_count;
}*/