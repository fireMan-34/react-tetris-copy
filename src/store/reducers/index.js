import { combineReducers } from 'redux-immutable';
import lock from './lock';
import drop from './drop';
const rootReducer = combineReducers({
    lock, drop
});
export default rootReducer;