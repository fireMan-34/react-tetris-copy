import * as Type from '../type';
import { lastRecord } from '../../util/cache';
import { MAX_POINT } from '../../util/const ';

let initState = parseInt(lastRecord?.points, 10) || 0;
if (initState < 0) {
    initState = 0;
}
else if (initState > MAX_POINT) {
    initState = MAX_POINT;
}
const points = (state = initState, action) => {
    switch (action.type) {
        case Type.POINTS:
            return action.data > MAX_POINT ? MAX_POINT : action.data;
        default:
            return state;
    }
};
export default points;