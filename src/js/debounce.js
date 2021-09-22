export const debounce = (func, ms = 100) => {
    let timeoutId;
    return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.call();
        }, ms);
    };
};