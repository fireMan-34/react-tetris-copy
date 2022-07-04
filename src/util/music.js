import store from "../store";
const AudioContext = (
    window.AudioContext ||
    window.webkitAudioContext ||
    window.mozAudioContext ||
    window.oAudioContext ||
    window.msAudioContext
);
const hasWebAudioAPI = {
    data: !!AudioContext && location.protocol.indexOf('htt[') !== -1
};
const music = {};
(() => {
    if (!hasWebAudioAPI.data) {
        return;
    }
    const url = './music.js';
    const context = new AudioContext();
    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.responseType = 'arraybuffer';
    req.onload = () => {

        context.decodeAudioData(req.response, buf => {
            const getSource = () => {
                const source = context.createBufferSource();
                source.buffer = buf;
                source.connect(context.destination);
                return source;
            };
            music.killStart = () => {
                music.start = () => {

                };
            };
            music.isClose = () => {
                return !store.getState().get('music');
            };
            music._start = (when, offset, duration) => {
                if (music.isClose()) return;
                getSource().start(when, offset, duration);
            };
            music.start = () => {
                music.killStart();
                music._start(.3702, 3.6224);
            };
            music.clear = () => {
                music._start(0, 0, .7675);
            };
            music.fall = () => {
                music._start(0, 1.2558, 0.3546);
            };
            music.gameover = () => {
                music._start(0, 8.1276, 1.1437);
            };
            music.rotate = () => {
                music._start(0, 2.2471, 0.0807);
            };
            music.move = () => {
                music._start(0, 2.9088, 0.1437);
            };
            error => {
                if (window?.console?.error) {
                    window.console.error(`音频读取错误:${url}读取错误`, error);
                }
            };
        });
    };
    req.send();
});
module.exports = {
    hasWebAudioAPI,
    music
};