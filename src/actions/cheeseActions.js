import { createAction } from 'redux-actions';

export const fetchCheesesRequest = createAction('FETCH_CHEESES_REQUEST');
export const fetchCheesesSuccess = createAction('FETCH_CHEESES_SUCCESS');
export const fetchCheesesError = createAction('FETCH_CHEESES_ERROR');

export const fetchCheeses = () => dispatch => {
    dispatch(fetchCheesesRequest());

    fetch('/cheeses')
        .then(res => res.json())
        .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
        .catch(err => dispatch(fetchCheesesError(err)));
};