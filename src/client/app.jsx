import "babel-polyfill";
import React from "React";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import catReducer from "./reducers/cat-reducer";
import MeowMessage from "./containers/meow-message";
import MeowButton from "./containers/meow-button";

const store = createStore( combineReducers( {
	cat: catReducer
} ) );

ReactDOM.render(
	<Provider store={store}>
		<div>
			<MeowMessage />
			<MeowButton />
		</div>
	</Provider>
	, document.querySelector(".app")
);
