function throttle(fn, delay = 200) {
    let timer = 0;
    return function () {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = 0
        }, delay)
    }
}