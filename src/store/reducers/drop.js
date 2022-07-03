import * as Type from "../type";
import { lastRecord } from '../../util/cache';
const drop = (state, action) => {
    switch (action.type) {
        case Type.DROP:
            return action.data;
        default:
            return state;
    }
};
export default drop;