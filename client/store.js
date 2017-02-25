import {createStore, applyMiddleware, combineReducers} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import wikiPagesReducer from './wikipages-reducer';

const rootreducer = combineReducers({allWikiPages: wikiPagesReducer});
export default createStore(rootreducer, applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed: true})
));
