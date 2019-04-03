import { createAction } from 'redux-actions';

export const userDataLoading = createAction('user data loading', () => ({
  meta: 'ajax',
}));

export const initialDataLoaded = createAction('initial data loaded', user => ({
  user,
  meta: 'ajax',
}));

export const getInitialData = () => {
  return (dispatch) => {
    return dispatch(initialDataLoaded(null));
  };
};
