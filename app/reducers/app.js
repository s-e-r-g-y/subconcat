
import { handleActions } from 'redux-actions';

const initialState = {
  userData: undefined,
  userDataLoading: false,
};

export default handleActions(
  {
    'user data loading': (state) => {
      return {
        ...state,
        userDataLoading: true,
      };
    },

    'initial data loaded': (state, action) => {
      return {
        ...state,
        userData: action.payload.user,
        userDataLoading: false,
      };
    },
  },
  initialState,
);
