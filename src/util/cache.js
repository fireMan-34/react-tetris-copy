const StorageKey = "REACT_TERITS";
export const lastRecord = (() => {
    let data = localStorage.getItem(StorageKey);
    if (!data) {
        return false;
    }
    try {
        if (window.btoa) {
            data = window.atob(data);
        }
        data = decodeURIComponent(data);
        data = JSON.parse(data);

    } catch (error) {
        if (window?.console?.error) {
            window.console.error(`读取记录错误`, error);
        }
        return false;
    }
})();