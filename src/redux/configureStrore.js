import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Question from './question';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            question: Question
        }), applyMiddleware(thunk, logger)
    );

    return store;
}