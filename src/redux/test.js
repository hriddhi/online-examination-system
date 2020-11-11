import * as ActionTypes from './ActionTypes';
import produce from 'immer';

const Test = produce((
    draft = {
        isLoading: false,
        err: null,
        testID: null,
        questionID: null,
        started: false,
        time: null
    }, action) => {
        switch(action.type){
            case ActionTypes.VERIFY_TEST_SUCCESS:
                draft.testID = action.payload.id;
                draft.questionID = action.payload.q_id
                draft.time = action.payload.time
                draft.started = action.payload.started
                draft.err = null;
                return;

            case ActionTypes.VERIFY_TEST_FAILED:
                draft.err = 404
                return;

            case ActionTypes.START_TIMER:
                draft.started = true;
                return;

            default:
                return draft;
        }
    }
)

export default Test;