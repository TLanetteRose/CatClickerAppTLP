//Thanks to Ben Cunningham tutorial, https://medium.com/letsboot/creating-a-dog-clicker-game-47b75b46e56e


// Create cats object with names and pictures
let model = {
	currentCat: null,
	cats: [
	{
		"name": "Mozeley",
		"imgSrc": "../CatClickerPremV3/img/MozeleyPosing.jpg",
		"clickCount": 0
	}, 
	{
		"name": "Shinxley",
		"imgSrc": "../CatClickerPremV3/img/ShinxleyPosing.jpg",
		"clickCount": 0
	},
	{
		"name": "Mozeley2",
		"imgSrc": "../CatClickerPremV3/img/MozeleyOnWindowSill.jpg",
		"clickCount": 0
	}, 
	{
		"name": "Shinxley2",
		"imgSrc": "../CatClickerPremV3/img/ShinxleyFavChair.jpg",
		"clickCount": 0
	},
	{
		"name": "Shinxley3",
		"imgSrc": "../CatClickerPremV3/img/ShinxleyNapping.jpg",
		"clickCount": 0
	}
]
}; 

//Adding elements ul and li with class

let octopus = {

	init: function() {
		console.log("init function of octopus")
		console.log(model.cats[0]);
		// set our current cat to the first one in the list
		model.currentCat = model.cats[0];
		console.log(model.currentCat);
		// tell our views to initialize
		catListView.init();
		catView.init();
	}, 

	getCurrentCat: function() {
		console.log(model.currentCat);
		return model.currentCat;
	}, 

	getCats: function () {
		console.log(model.cats);
		return model.cats;
	}, 

	//set the currently-selected cat to the object passed in

	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},

	//increments the counter for the currently-selected cat
	incrementCounter: function() {
		model.currentCat.clickCount++;
		catView.render();
	}
};

/* View */

let catView = {

	init: function() {
		//store pointers to our DOM elements for easy access later
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat_name');
		this.catImageElem = document.getElementById('cat_img');
		this.countElem = document.getElementById('cat_count');

		//on click, increment the current cat's counter
		this.catImageElem.addEventListener('click', function() {
			octopus.incrementCounter();
		});

		// render this view (update the DOM elements with right values)
		this.render();
	},

	render: function() {
		//update the DOM elements with values from the current cat
		console.log("render function of cat view");
		let currentCat = octopus.getCurrentCat();
		console.log("the render function current cat is " + currentCat);
		this.countElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.imgSrc;
	}

};



let catListView = {

	init: function() {
		// store the DOM element for easy access later
		console.log("cat list view initial function")
		this.catListElem = document.getElementById('cat_list');
		console.log(this.render);
		// render this view (update DOM elements with the right values)
		this.render();
	},


	render: function() {
		// update the DOM elements with values from the current cat
		console.log("render function of cat list view ")
		let cat, elem, i;
		// get the cats we'll be rendering from the octopus
		let cats = octopus.getCats();
		console.log("the render function of catlist" + cats);

		// empty the cat list
		this.catListElem.innerHTML = '';

		// loop over the cats
		for (i = 0; i < cats.length; i++) {
			//this is the cat we're currently looping over
			cat = cats[i];

			//make a new cat list item and set its text
			elem = document.createElement('li');
			elem.textContent = cat.name;

			// on click, setCurrentCat and render the catView
			// (this uses our closure-in-a-loop trick to connect the value
			// of the cat variable to the click event function)
			elem.addEventListener('click', (function(catCopy) {
				return function() {
					octopus.setCurrentCat(catCopy);
					catView.render();
				};
			})(cat));

			//finally, add the element to the list
			this.catListElem.appendChild(elem);
		}
	}

};

// make it go!
octopus.init();








/*let cat_count = 0;

function onClick() {
	cat_count++;
	document.getElementById('cat_count').innerHTML = 'Clicks: ' + cat_count;
}*/