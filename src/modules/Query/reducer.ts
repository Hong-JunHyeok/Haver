import { AxiosError, AxiosResponse } from 'axios';
import { QUERY_START, QUERY_SUCCESS, QUERY_ERROR, QueryActions } from './actions';

type State = {
  loading: boolean;
  data: AxiosResponse | null;
  error: AxiosError | null;
};
const initialState: State = {
  loading: false,
  data: null,
  error: null,
};

function queryReducer(state: State = initialState, action: QueryActions) {
  switch (action.type) {
    case QUERY_START:
      return {
        ...state,
        loading: true,
      };
    case QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case QUERY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default queryReducer;
