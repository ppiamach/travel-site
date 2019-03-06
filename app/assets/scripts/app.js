var $ = require('jquery');
// var Person = require('./modules/Person'); require() is part of Node.js env
import Person from './modules/Person'; //ES6 way of doing the require()

class Adult extends Person {
	payTaxes() {
		console.log(this.name + ' owes $0 in taxes.');
	}
}

var john = new Person('John Doe', 'blue');
john.greet();

var jane = new Adult('Jane Smith', 'orange');
jane.greet();
jane.payTaxes();
