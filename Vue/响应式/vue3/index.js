let activeEffect
function effect(fn) {
    activeEffect = fn;
    fn();
}
const bucket = new WeakMap();
const data = {ok: true, text: 'hello world'};
//weakMap不影响垃圾回收机制的回收
const obj = new Proxy(data, {
    get(target, key) {
        track(target, key);
        return target[key]
    },
    set(target, key, newVal) {
        target[key] = newVal;
        triggle(target, key)
    }
})
//track追踪
function track(target, key) {
    if (!activeEffect) return target[key];
    let depsMap = bucket.get(target);
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()));
    }
    let deps = depsMap.get(key);
    if (!deps) {
        depsMap.set(key, (deps = new Set()));
    }
    deps.add(activeEffect)
}
//触发
function triggle(target, key) {
    const depsMap = bucket.get(target);
    if (!depsMap) return
    const effects = depsMap.get(key)
    effects && effects.forEach( fn => fn())
}
//分支切换 document.body.innerText = obj.ok ? obj.text : 'not'
//会导致依赖遗留问题，导致不必要的更新
// effect(function effectFn() {
    
// })

//forEach中被删除的对象重新加入会被重新遍历
const set = new Set([1]);
const newSet = new Set(set) 
console.log(set,newSet)
newSet.forEach(item => {
    set.delete(1);
    set.add(1);
    console.log('遍历中')
})