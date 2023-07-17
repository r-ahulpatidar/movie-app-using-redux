import {
  GET_MOVIES_FAILURE,
  GET_MOVIES_SUCCESS,
  SEARCH_MOVIE_FAILURE,
  SEARCH_MOVIE_SUCCESS,
} from './action';

export const INITIAL_STATE = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
  error: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log('reducer', { type, payload });
  switch (type) {
    case GET_MOVIES_SUCCESS:
      return { ...state, ...payload, error: '' };
    case GET_MOVIES_FAILURE:
      return { ...state, error: payload };
    case SEARCH_MOVIE_SUCCESS:
      return { ...state, ...payload, error: '' };
    case SEARCH_MOVIE_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default reducer;
