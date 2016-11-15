// Because of how we import Cat to index.js, we can make this self-referential and use default classes.

export default class {

	constructor( name ) {
		this.name = name;
	}

	meow( ) {
		return `Meooww, I am a weeze little ${this.name}`;
	}
}

// We don't need to do this using 'export default class'
// module.exports = Cat;
