import * as Type from "../type";
import { lastRecord } from '../../util/cache';
const initState = lastRecord?.drop || false;
const drop = (state = initState, action) => {
    switch (action.type) {
        case Type.DROP:
            return action.data;
        default:
            return state;
    }
};
export default drop;