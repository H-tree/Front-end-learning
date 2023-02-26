function race(promises) {
    return new Promise((resolve,reject)=>{
        for (let i = 0; i < len; i++) {
            Promise.resolve(promises[i]).then(res => {
                //Promise.resolve如果目标对象不是promise的实例就将他转成promise的实例并且resolve掉
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        }
    })
}