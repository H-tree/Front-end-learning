let obj = {};
// 一
console.log(JSON.stringify(obj) === "{}")
// 二
function isObject() {
    for (let i of obj) {
        return false
    }
    return true
}
console.log(obj)
// 三
console.log(Object.keys(obj).length == 0)
// 四
console.log(Object.getOwnPropertyNames(obj).length == 0)
// 五
console.log(Reflect.ownKeys(obj).length == 0)