function all(promises) {
    return new Promise((resolve, reject) => {
        const len = promises.length;
        const result = [];
        let count = 0;
        if (len == 0) {
            resolve(result);
            return
        }
        for (let i = 0; i < len; i++) {
            Promise.resolve(promises[i]).then(res => {
                //Promise.resolve如果目标对象不是promise的实例就将他转成promise的实例并且resolve掉
                count++;
                result[i] = res;
                if (count == len) {
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            })
        }
    })
}