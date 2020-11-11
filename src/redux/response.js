import * as ActionTypes from './ActionTypes';
import produce from 'immer';

const Response = produce((
    draft = {
        isLoading: false,
        err: null,
        response: [],
        testId: null
    }, action) => {
        switch(action.type){
            case ActionTypes.ADD_RESPONSE_LOADING:
                draft.isLoading = true;
                draft.err = null;
                return;

            case ActionTypes.ADD_RESPONSE_SUCCESSFUL:
                draft.isLoading = false;
                draft.response[action.payload.q] = action.payload.o;
                draft.err = null;
                return;

            default:
                return draft;
        }
    }
)

export default Response;