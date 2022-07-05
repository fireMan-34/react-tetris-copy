import * as Type from '../type';
import { lastRecord } from '../../util/cache';

const initState = lastRecord?.pause || false;
const pasue = (state = initState, action) => {
    switch (action.type) {
        case Type.PAUSE:
            return action.data;
        default:
            return state;
    }
};
export default pasue;