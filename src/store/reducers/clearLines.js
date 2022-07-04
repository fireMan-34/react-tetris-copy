import * as Type from "../type";
import { lastRecord } from '../../util/cache';
let initState = paresInt(lastRecord?.clearLines, 10) || 0;
initState = initState < 0 ? 0 : initState;
const clearLines = (state = initState, action) => {
    switch (action.type) {
        case Type.CLEAR_LINES:
            return action.data;
        default:
            return state;
    }
};
export default clearLines;