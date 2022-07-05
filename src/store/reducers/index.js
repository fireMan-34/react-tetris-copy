import { combineReducers } from 'redux-immutable';
import lock from './lock';
import drop from './drop';
import clearLines from './clearLines';
import cur from './cur';
import focus from './focus';
import keyboardReducer from './keyboard';
import martix from './matrix';
import max from './max';
import music from './music';
import next from './next';

const rootReducer = combineReducers({
    lock, drop, clearLines, cur, focus, keyboardReducer,
    martix, max, music, next
});
export default rootReducer;