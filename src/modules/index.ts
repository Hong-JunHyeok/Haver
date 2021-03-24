import { combineReducers } from 'redux';
import query from './Query';

const rootReducer = combineReducers({
  query,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
