import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Question from './question';
import Response from './response';
import Test from './test';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            question: Question,
            response: Response,
            test: Test
        }), applyMiddleware(thunk, logger)
    );

    return store;
}