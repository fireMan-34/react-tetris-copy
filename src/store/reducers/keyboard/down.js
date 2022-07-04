import * as Type from "../../type";
const initState = false;
const reducer = (state = initState, action) => {
    switch (action.type) {
        case Type.KEY_DOWN:
            return action.data;
        default:
            return state;
    };
};
export default reducer;