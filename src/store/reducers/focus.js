import * as Type from "../type";
import { isFocus } from '../../util/view';
const initState = isFocus();
const focus = (state = initState, action) => {
    switch (action.type) {
        case Type.FOCUS:
            return action.data;
        default:
            return state;
    }
};

export default focus;  