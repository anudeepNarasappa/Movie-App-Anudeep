import {combineReducers} from 'redux';

import {GET_DATA, GET_POSTER_DATA} from '../actions/actions'; //Import the actions types constant we defined in our actions

let dataState = {data: []};

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {...state, data: action.payload};
    case GET_POSTER_DATA:
      return {data: action.payload};
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer,
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
