import { all } from 'redux-saga/effects';
import movieSaga from './movies/sagas';

export default function* rootSaga() {
  yield all([...movieSaga]);
}
