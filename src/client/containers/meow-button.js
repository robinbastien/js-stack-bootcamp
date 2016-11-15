import { connect } from "react-redux";
import Button from "../components/button";
import { makeMeow } from "../actions/cat-actions";

const mapDispatchToProps = dispatch => ( {
	action: ( ) => {
		dispatch( makeMeow( ) );
	},
	actionLabel: "Meow"
} );

export default connect( null, mapDispatchToProps )( Button );
