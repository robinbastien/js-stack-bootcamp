import { MAKE_MEOW } from "../actions/cat-actions";

const initialState = {
	hasMeowed: false
};

const catReducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case MAKE_MEOW:
			return {
				hasMeowed: action.payload
			};
		default:
			return state;
	}
};

export default catReducer;
