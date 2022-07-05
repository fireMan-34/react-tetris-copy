import * as Type from '../type';
import { lastRecord } from '../../util/cache';
let initState = parseInt(lastRecord?.speedRun, 10) || 1;
if (initState < 1 || initState > 6) {
    initState = 1;
}
const speedRun = (state = initState, { type, data }) => {
    switch (type) {
        case Type.SPEED_RUN:
            return data;
        default: return state;
    }
};
export default speedRun;