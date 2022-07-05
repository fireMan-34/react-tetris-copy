import * as Type from '../type';
import { lastRecord } from '../../util/cache';
import { blockType, getNextType } from '../../util/const ';

const initState = blockType.indexOf(lastRecord?.next) !== -1 ? lastRecord.next : getNextType();

const parse = (state = initState, action) => {
    switch (action.type) {
        case Type.NEXT_BLOCK:
            return action.data;
        default:
            return state;
    }
};
export default parse;