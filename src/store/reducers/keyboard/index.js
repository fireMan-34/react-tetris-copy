import { combineReducers } from 'redux-immutable';
import down from './down';
import drop from './drop';
import left from './left';
import right from './right';
import music from './music';
import pause from './pause';
import rotate from './rotate';

const keyboardReducer = combineReducers({
    drop, drop,
    left, right,
    music,
    pause,
    rotate,

});
export default keyboardReducer;