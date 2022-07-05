import * as Type from '../type';
import { lastRecord } from '../../util/cache';

let initState = parseInt(lastRecord?.speedStart, 10) || 1;
if (initState < 1 || initState > 6) {
    initState = 1;
}

const speedStart = (state = initState, { type, data }) => {
    switch (type) {
        case Type.SPEED_START:
            return data;
        default:
            return state;
    }
};
export default speedStart;
