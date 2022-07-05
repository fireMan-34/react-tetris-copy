import * as Type from '../type';
import { lastRecord } from '../../util/cache';

const initState = lastRecord?.reset || false;
const reset = (state = initState, action) => {
    switch (action.type) {
        case Type.RESET:
            return action.data;
        default: return state;
    };
};
export default reset;