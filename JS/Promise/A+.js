const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise{
    constructor(executor) {
        try {
        executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }
    //静态调用
    static resolve (parameter) {
        if (parameter instanceof MyPromise) {
            return parameter;
        } 
        return new MyPromise(resolve => {
            resolve(parameter)
        })
    }
    static reject (reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }
    status = PENDING;
    //成功之后的值
    value = null;
    //失败之后的值
    reason = null;
    onFulfilledCallback = [];
    onRejectedCallback = [];
    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value;
            while(this.onFulfilledCallback.length) {
                this.onFulfilledCallback.shift()(value);
            }
        }
    }
    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
            while(this.onRejectedCallback.length) {
                this.onRejectedCallback.shift()(reason);
            }
        }
    }
    then(onFulfilled, onRejected) {
       const  realOnFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
       const realOnRejected = typeof onRejected === 'function' ? onRejected : reason => {throw this.reason};
        const fulfilledMicrotask = () =>  {
            // 创建一个微任务等待 promise2 完成初始化
            queueMicrotask(() => {
              try {
                // 获取成功回调函数的执行结果
                const x = realOnFulfilled(this.value);
                // 传入 resolvePromise 集中处理
                resolvePromise(promise2, x, resolve, reject);
              } catch (error) {
                reject(error)
              } 
            })  
          }
          const rejectedMicrotask = () => { 
            // 创建一个微任务等待 promise2 完成初始化
            queueMicrotask(() => {
              try {
                // 调用失败回调，并且把原因返回
                const x = realOnRejected(this.reason);
                // 传入 resolvePromise 集中处理
                resolvePromise(promise2, x, resolve, reject);
              } catch (error) {
                reject(error)
              } 
            }) 
          }
        const promise2 = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                fulfilledMicrotask()
            } else if (this.status === REJECTED) {
                rejectedMicrotask()
            } else if (this.status === PENDING) {
                this.onFulfilledCallback.push(fulfilledMicrotask);
                this.onRejectedCallback.push(rejectedMicrotask);
            }
        })
        return promise2;
    }
}
function resolvePromise(promise, x, resolve, reject) {
    //如果 p1 = promise.then(value => {
    //  console.log(vlaue)
    //  return p1
    // })
    // 发送了循环引用就报错
    if (promise === x) {
        return reject(new TypeError('chaining cycle detected for promise #<Promise>'))
    }
    // if (x instanceof MyPromise) {
    //     x.then(resolve, reject);
    // } else {
    //     //.then返回的promise进行resolve
    //     resolve(x)
    // }
    if (typeof x == 'object' || typeof x == 'function') {
        if (x === null) {
            return resolve(x);
        }
    let then;
    try {
        then = x.then;
    } catch (error) {
        return reject(error);
    }
    if (typeof then === 'function') {
        let called = false;
        try {
            then.call(
                x,
                y => {
                    if (called) return;
                    called = true;
                    resolvePromise(promise, y, resolve, reject);
                },
                r => {
                    if (called) return;
                    called = true;
                    reject(r);
                }
            );
        } catch (error) {
            if (called) return;
            reject(error);
        }
    } else {
        resolve(x)
    }
    } else {
        resolve(x);
    }
}
module.exports = MyPromise