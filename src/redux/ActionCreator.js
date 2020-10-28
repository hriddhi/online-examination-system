import * as ActionTypes from './ActionTypes';

export const fetchQuestion = () => (dispatch) => {
    console.log('In fetchquestion')
    dispatch(fetchQuestionLoading);
}

export const fetchQuestionLoading = () => ({
    type: ActionTypes.FETCH_QUESTION_LOADING
})