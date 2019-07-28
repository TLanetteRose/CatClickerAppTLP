let cat_count = 0;

function onClick() {
	cat_count++;
	document.getElementById('cat_count').innerHTML = 'Clicks: ' + cat_count;
}