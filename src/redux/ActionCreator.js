import * as ActionTypes from './ActionTypes';
import QUESTION from '../question';

export const fetchQuestion = () => (dispatch) => {
    
    dispatch(fetchQuestionLoading());
    
    setTimeout(() => {
        dispatch(fetchQuestionSuccess(QUESTION.question));
    }, 3000)
    
}

export const fetchQuestionLoading = () => ({
    type: ActionTypes.FETCH_QUESTION_LOADING
})

export const fetchQuestionSuccess = (data) => ({
    type: ActionTypes.FETCH_QUESTION_SUCCESS,
    payload: data
})

// --------------------------------------------------


export const addResponse = (val) => (dispatch) => {
    
    dispatch(addResponseLoading());
    
    setTimeout(() => {
        dispatch(addResponseSuccess(val));
    }, 3000)
}

export const addResponseLoading = () => ({
    type: ActionTypes.ADD_RESPONSE_LOADING
})

export const addResponseSuccess = (data) => ({
    type: ActionTypes.ADD_RESPONSE_SUCCESSFUL,
    payload: data
})