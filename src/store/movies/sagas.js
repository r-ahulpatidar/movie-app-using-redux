import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_MOVIES_ACTION,
  SEARCH_MOVIE_ACTION,
  getMovieFailureAction,
  getMovieSuccessAction,
  searchMovieFailureAction,
  searchMovieSuccessAction,
} from './action';
import { getMovies, searchMovie } from '../../api';


export function* getMovieSaga() {
  try {
    const response = yield call(getMovies);
    console.log('saga response', response);

    yield put(getMovieSuccessAction(response));
  } catch (error) {
    yield put(getMovieFailureAction(error));
  }
}

export function* searchMovieSaga(action) {
  try {
    const response = yield call(searchMovie, action.payload);
    console.log('saga search response', response);

    yield put(searchMovieSuccessAction(response));
  } catch (error) {
    yield put(searchMovieFailureAction(error));
  }
}

export default [
  takeLatest(GET_MOVIES_ACTION, getMovieSaga),
  takeLatest(SEARCH_MOVIE_ACTION, searchMovieSaga),
];
