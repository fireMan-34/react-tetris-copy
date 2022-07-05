import { lastRecord } from '../../util/cache';
import * as Type from '../type';
import { hasWebAudioAPI } from '../../util/music';

let initState = lastRecord?.music || true;
if (!hasWebAudioAPI.data) { initState = false; };
const music = (state, action) => {
    switch (action.type) {
        case Type.MUSIC:
            return action.data;
        default:
            return state;
    }
};
export default music;