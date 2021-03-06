import * as types from '../constants/ActionTypes.js';

const initialState = {
  example: 'Example'
};

export default function example(state = initialState, action) {
  switch (action.type) {
    case types.EXAMPLE_SYNC:
      var newState = Object.assign({}, state);
      newState.example += action.data;
      return newState;
    default:
      return state;
  }
}
