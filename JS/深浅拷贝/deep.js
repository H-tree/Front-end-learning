const deepClone = function (obj, hash = new WeakMap()) {
    //判断是基础数据类型还是引用数据类型
    if (obj instanceof Object) {
        if (obj instanceof RegExp) {
            return new RegExp(obj);
        }
        if (obj instanceof Date) {
            return new Date(obj);
        }
        if (obj instanceof Function) {
            return function() {
                obj.apply(this, arguments);
            }
        }
        if (obj instanceof Set) {
            let set = new Set();
            obj.forEach(value => {
                set.add(deepClone(value));
            })
            return set;
        }
        if (obj instanceof Map){
            let map = new Map()
            obj.forEach((value,key) => {
                map.set(key,deepClone(value))
            });
            return map;
        }
        if (hash.has(obj)) return hash.get(obj);
        let allDesc = Object.getOwnPropertyDescriptors(obj);
        //获取身上自有属性
        let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
        hash.set(obj, cloneObj);
        //Reflect.ownKeys返回所以属性，不管是不是可枚举
        for (let key of Reflect.ownKeys(obj)) {
            cloneObj[key] = deepClone(obj[key], hash)
        }
        return obj instanceof Array ? Array.from(cloneObj) : cloneObj;
    }
    return obj;
}

let obj = {
    num: 0,
    str: '',
    boolean: true,
    unf: undefined,
    nul: null,
    obj: { name: '我是一个对象', id: 1 },
    arr: [0, 1, 2],
    func: function () { console.log('我是一个函数') },
    date: new Date(0),
    map: new Map([[1,2], [2,3]]),
    reg: new RegExp('/我是一个正则/ig'),
    set: new Set([1,2]),
    [Symbol('1')]: 1,
  };
  Object.defineProperty(obj, 'innumerable', {
    enumerable: false, value: '不可枚举属性' }
  );
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj
let cloneObj = deepClone(obj)
cloneObj.arr.push(4)
console.log('obj', obj)
console.log('cloneObj', cloneObj)
console.log(obj.innumerable)
// console.log([] instanceof Object)