import { combineReducers } from 'redux-immutable';
import lock from './lock';
const rootReducer = combineReducers({
    lock
});
export default rootReducer;