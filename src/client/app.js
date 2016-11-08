import "babel-polyfill";
import Cat from "../shared/cat";
const browserAbbey = new Cat( "Browser Abbey" );

document.querySelector( ".app" ).innerText = browserAbbey.meow();
