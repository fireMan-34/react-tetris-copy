import * as Type from '../type';

const lock = (state = false, action) => {
    switch (action.type) {
        case Type.LOCK:
            return action.data;
        default:
            return state;
    }
};
export default lock;