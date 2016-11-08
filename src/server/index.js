// Get the Kitteh

/* This is replaced by the below, for newer ES6
 * const Cat = require('./cat');
 */
import Cat from "../shared/cat";

const abbey = new Cat( "Abbey" );

console.log( abbey.meow( ) );
