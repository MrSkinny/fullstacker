import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const INITIAL_STATE = {
    cheeses: [],
    loading: false,
    error: null,
};

export default handleActions({
    [actions.fetchCheesesRequest]: (state, action) => {
        return { ...state, loading: true };
    },

    [actions.fetchCheesesSuccess]: (state, action) => {
        return { ...state, loading: false, error: null, cheeses: action.payload };
    },

    [actions.fetchCheesesError]: (state, action) => {
        return { ...state, loading: false, error: action.payload };
    }
}, INITIAL_STATE);
