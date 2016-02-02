import React, {PropTypes, Component} from 'react';
import Look, {StyleSheet} from 'react-look';

class Example extends Component {
	render() {
		const {state, actions} = this.props;
		return (
			<div look={styles.example} onClick={actions.example.async}>
				{state.example.example}
			</div>
		);
	}
}

Example.propTypes = {
	state: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

import styleSheet from './style.js';
var styles = StyleSheet.create(Example, styleSheet);

export default Look(Example);
