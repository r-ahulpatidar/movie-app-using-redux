// Action name constant
export const GET_MOVIES_ACTION = 'GET_MOVIES_ACTION';
export const GET_MOVIES_SUCCESS = `${GET_MOVIES_ACTION}_SUCCESS`;
export const GET_MOVIES_FAILURE = `${GET_MOVIES_ACTION}_FAILURE`;

export const SEARCH_MOVIE_ACTION = 'SEARCH_MOVIE_ACTION';
export const SEARCH_MOVIE_SUCCESS = `${SEARCH_MOVIE_ACTION}_SUCCESS`;
export const SEARCH_MOVIE_FAILURE = `${SEARCH_MOVIE_ACTION}_FAILURE`;

// Action Creator
export const getMovieAction = () => ({
  type: GET_MOVIES_ACTION,
});

export const getMovieSuccessAction = (movie) => ({
  type: GET_MOVIES_SUCCESS,
  payload: movie,
});

export const getMovieFailureAction = (movie) => ({
  type: GET_MOVIES_FAILURE,
  payload: movie,
});

export const searchMovieAction = (searchValue) => ({
  type: SEARCH_MOVIE_ACTION,
  payload: searchValue,
});

export const searchMovieSuccessAction = (movie) => ({
  type: SEARCH_MOVIE_SUCCESS,
  payload: movie,
});

export const searchMovieFailureAction = (movie) => ({
  type: SEARCH_MOVIE_FAILURE,
  payload: movie,
});
