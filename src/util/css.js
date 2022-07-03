const transform = (function () {
    const trans = ['transform', 'webkitTransform', 'msTransform', 'mozTransform', 'oTransform'];
    const body = document.body;
    return trans.filter(e => body.style[e] !== undefined)[0];
})();
const size = (w, h) => {
    const ratio = h / w;
    let filling = 0;
    let scale;
    let css = {};
    if (ratio < 1.5) {
        scale = h / 960;
    }
    else {
        scale = w / 640;
        filling = (h - (960 * scale)) / scale / 3;
        css = {
            // paddingTop: Math.floor(filling) + 42,
            // paddingBottom: Math.floor(filling),
            // marginTop: Math.floor(-480 - (filling * 1.5)),
        };
        css[transform] = `scale(${scale})`;
    }
    return css;
};
export {
    size
};