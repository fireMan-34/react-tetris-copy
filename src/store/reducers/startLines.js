import * as Type from '../type';
import { lastRecord } from '../../util/cache';
let initState = parseInt(lastRecord?.startLines, 10) || 0;
if (initState < 0 || initState > 10) {
    initState = 0;
}
const startLines = (state = initState, { type, data }) => {
    switch (type) {
        case Type.START_LINES:
            return data;
        default: return state;
    }
};
export default startLines;