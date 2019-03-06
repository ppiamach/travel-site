class Person {
	constructor(fullName, favColor) {
		//private attributes
		this.name = fullName;
		this.favoriteColor = favColor;
	}

	greet() {
		//public method
		console.log('hi there, ' + this.name + ' with ' + this.favoriteColor);
	}
} //blue print for constructor Person 'class' eventhough no class in JS
//JS uses prototypical inheritance instead of classical inheritance
//ES6 has added a 'class' method

// module.exports = Person; Node.js way of exporting
export default Person; //ES6 way of exporting
