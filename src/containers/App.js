import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Example from '../components/Example';

import * as example from '../actions/example.js';

class App extends Component {
  render() {
    const {state, dispatch} = this.props;
    const actions = {
      example: bindActionCreators(example, dispatch)
    }

    return (<Example state={state} actions={actions}/>);
  }
}

App.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {state: state};
}

export default connect(mapStateToProps)(App);
