import { combineReducers } from 'redux';
import query from './Query';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  query,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
