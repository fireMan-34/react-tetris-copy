import * as Type from '../type';
import { lastRecord } from '../../util/cache';
import { MAX_POINT } from '../../util/const ';

let initState = !isNaN(parseInt(lastRecord?.max, 10)) ? parseInt(lastRecord.max, 10) : 0;
if (initState < 0) {
    initState = 0;
}
else if (initState > MAX_POINT) {
    initState = MAX_POINT;
}
const parse = (state = initState, action) => {
    switch (action.Type) {
        case Type.MAX:
            return action.data > MAX_POINT ? MAX_POINT : action.data;
        default:
            return state;
    }
};
export default parse;