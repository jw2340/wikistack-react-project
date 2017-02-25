import {RECEIVE_WIKIPAGES} from './action-creators';

const initialState = [];

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case RECEIVE_WIKIPAGES:
      return action.receivedWikiPages;

    default:
      return state;
  }

};

export default reducer;
