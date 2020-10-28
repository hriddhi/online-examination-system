import * as ActionTypes from './ActionTypes';
import produce from 'immer';

const Question = produce((
    draft = {
        isLoading: false,
        err: null,
        question: [],
        testId: null
    }, action) => {
        switch(action.type){
            case ActionTypes.FETCH_QUESTION_LOADING:
                draft.isLoading = true;
                draft.err = null;
                return;

            default:
                return draft;
        }
    }
)

export default Question;