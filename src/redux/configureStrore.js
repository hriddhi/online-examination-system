import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Question from './question';
import Response from './response';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            question: Question,
            response: Response
        }), applyMiddleware(thunk, logger)
    );

    return store;
}