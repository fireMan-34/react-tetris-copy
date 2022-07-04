const hiddenProperty = (() => {
    let names = [
        'hidden',
        'webkitHidden',
        'mozHidden',
        'msHidden',
    ].filter(e => e in document);
    return names.length > 0 ? names : false;
})();
function isFocus() {
    return !hiddenProperty || hiddenProperty.map(str => str.replace(/hidden/i, 'visibilitychange'));
}
export {
    isFocus
};