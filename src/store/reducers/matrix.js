import { List } from "immutable";
import * as Type from "../type";
import { lastRecord, } from "../../util/cache";
import { blankMatrix } from "../../util/const ";

const initState = Array.isArray(lastRecord?.martix) ? List(lastRecord.martix.map(e => List(e))) : blankMatrix;

const martix = (state = initState, action) => {
    switch (action.type) {
        case Type.MATRIX:
            return action.data;
        default:
            return state;
    }
};
export default martix;