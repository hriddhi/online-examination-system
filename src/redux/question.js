import * as ActionTypes from './ActionTypes';
import produce from 'immer';

const Question = produce((
    draft = {
        isLoading: false,
        err: null,
        question: []
    }, action) => {
        switch(action.type){
            case ActionTypes.FETCH_QUESTION_LOADING:
                draft.isLoading = true;
                draft.err = null;
                return;

            case ActionTypes.FETCH_QUESTION_SUCCESS:
                draft.isLoading = false;
                draft.question = action.payload;
                draft.err = null;
                return;

            case ActionTypes.FETCH_QUESTION_FAILED:
                draft.isLoading = false;
                draft.err = true;
                return;

            default:
                return draft;
        }
    }
)

export default Question;