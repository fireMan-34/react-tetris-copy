import { List } from "immutable";
import * as Type from "../type";
import { lastRecord } from '../../util/cache';
import Block from "../../util/block";

const initState = (() => {
    if (!lastRecord?.cur) {
        return null;
    };
    const { cur } = lastRecord;
    const option = {
        type: cur.type,
        shap: List(cur.shap.map(e => List(e))),
        xy: cur.xy,
    };
    return new Block(option);
})();
const cur = (state = initState, action) => {
    switch (action.type) {
        case Type.MOVE_BLOCK:
            return action.data;
        default:
            return state;
    }
};
export default cur;