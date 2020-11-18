import * as ActionTypes from './ActionTypes';
import produce from 'immer';

const Test = produce((
    draft = {
        started: false,
        err: null,
        testID: null,
        questionID: null,
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

            case ActionTypes.STOP_TIMER:
                draft.started = false;
                return;

            case ActionTypes.VERIFY_TEST_COMPLETE:    
                draft.started = false;
                return;

            default:
                return draft;
        }
    }
)

export default Test;