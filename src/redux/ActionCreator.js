import * as ActionTypes from './ActionTypes';
import QUESTION from '../question';
import TEST from '../test';

export const verifyTest = (id) => (dispatch) => {
    var index = TEST.findIndex((val) => val.id === id)
    if(index !== -1)
        dispatch(verifyTestSuccess(TEST[index]))
    else
        dispatch(verifyTestFailed())
}

export const verifyTestSuccess = (data) => ({
    type: ActionTypes.VERIFY_TEST_SUCCESS,
    payload: data
})

export const verifyTestFailed = () => ({
    type: ActionTypes.VERIFY_TEST_FAILED
})

// ------------------------------------------

export const fetchQuestion = (id) => (dispatch) => {
    
    dispatch(fetchQuestionLoading());
    
    setTimeout(() => {
        var index = QUESTION.findIndex((val) => val.id === id)
        if(index !== -1)
            dispatch(fetchQuestionSuccess(QUESTION[index].question));
        else
            dispatch(fetchQuestionFailed())
        
        dispatch(startTimer());
    }, 3000)
    
}

export const fetchQuestionLoading = () => ({
    type: ActionTypes.FETCH_QUESTION_LOADING
})

export const fetchQuestionSuccess = (data) => ({
    type: ActionTypes.FETCH_QUESTION_SUCCESS,
    payload: data
})

export const fetchQuestionFailed = () => ({
    type: ActionTypes.FETCH_QUESTION_FAILED
})

export const startTimer = () => ({
    type: ActionTypes.START_TIMER
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