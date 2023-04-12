//new的步骤
// 1.创建一个对象
// 2.维持原型关系
// 3.改变this指向
// 4.返回新对象
function _new(ctor, ...args) {
    if (typeof ctor !== 'function') {
        throw 'ctor must be a function'
    }
    let obj = new Object();
    obj.__proto__ = Object.create(ctor.prototype);
    let res = ctor.apply(obj, [...args]);
    let isObject = typeof res === 'object' && res !== null;
    let isFuction = typeof res === 'function';
    return isObject || isFuction ? res : obj
}
//防止直接修改a.prototype = ....
function a() {
    console.log(this)
}
console.log(_new(a))