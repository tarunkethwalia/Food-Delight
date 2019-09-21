import {combineReducers} from 'redux';
import menuReducer from './MenuReducer';

const rootReducer = combineReducers({
    cards: menuReducer
});

export default rootReducer;