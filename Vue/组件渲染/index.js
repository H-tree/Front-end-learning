//对应源码位置
//runtime-core/src/renderer.ts
// processComponent
const Mycomponent = {
    name: 'MyComponent',
    data() {
        return {
            foo: 'hello world'
        }
    },
    render() {
        return {
            type: 'div',
            children: '我是文本内容',
        }
    }
}
const vnode = {
    type: Mycomponent
}
function mountComponent(vnode, container, anchor) {
    const componentOptions = vnode.type;
    const { render, data, beforeCreate, created, beforeMount, mounted, beforeUpdate, updated } = componentOptions;
    //调用beforeCreate钩子,beforeCreate存在的情况下调用beforeCreate;
    beforeCreate && beforeCreate();
    //组件自身的状态数据,即data
    const state = reactive(data());
    const instance = {
        state,
        isMounted: false,
        //虚拟dom
        subTree: null
    }
    vnode.component = instance

    //调用created钩子
    created && created.call(state);
    //副作用函数
    effect(() => {
        const subTree = render.call(state, state);
        if (!instance.isMounted) {
            // 调用beforeMount钩子
            beforeMount && beforeMount.call(state);
            //初次挂载,调用patch函数第一个参数传递null
            patch(null, subTree, container, anchor);
            instance.isMounted = true;
            // 调用mounted钩子
            mounted && mounted.call(state)
        } else {
            //调用beforeUpdate钩子
            beforeUpdate && beforeUpdate.call(state);
            patch(instance.subTree, subTree, container, anchor)
            //调用updated钩子
            updated && updated.call(state)
        }
        instance.subTree = subTree
    }, { scheduler: queueJob})
}

//任务缓存队列，用一个Set数据结构来表示，这样就可以自动对任务进行去重
const queue = new Set()
//一个标志，代表是否正在刷新队列
let isFlushing = false
const p = Promise.resolve()

//调度器的主要函数,用来将一个任务添加到缓存队列中,并开始刷新队列
function queueJob(job) {
    queue.add(job);
    if (!isFlushing) {
        isFlushing = true;
        p.then(() => {
            try {
                queue.forEach(job => job())
            } finally {
                isFlushing = false;
                queue.clear();
            }
        })
    }
}
