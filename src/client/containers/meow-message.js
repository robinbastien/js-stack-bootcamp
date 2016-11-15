import { connect } from "react-redux";
import Message from "../components/message";

const mapStateToProps = state => ( {
	message: state.cat.hasMeowed ? "Thee kitteh meowed" : "Thee kitteh meow not"
} );

export default connect( mapStateToProps )( Message );
