const keepAlive = {
    //keepAlive组件独有的属性，用作标识
    __isKeepAlive: true,
    setup(props, {slots}) {
        const cache = new Map();
        const instance = currentInstance;
        const { move, createElement} = instance.keepAliveaCtx;
        //创建隐藏容器
        const storageContainer = createElement('div');
        instance._deActive = (vnode) => {
            move(vnode, storageContainer)
        }
        instance._activate = (vnode, container, anchor) => {
            move(vnode, container, anchor)
        }
        return () => {
            let rawVNode = slots.default()
            if (typeof rawVNode.type !== 'object') {
                return rawVNode
            }
            const cachedVNode = cache.get(rawVNode.type)
            if (cachedVNode) {
                rawVNode.component = cachedVNode.component;
                rawVNode.keptAlive = true;
            } else {
                //如果没有缓存，则将其添加到缓存中
                cache.set(rawVNode.type, rawVNode);
            }
            rawVNode.shouldKeepAlive = true;
            rawVNode,keepAliveInstance = instance;
            //渲染组件vnode
            return rawVNode
        }
    }
}

function unmount(vnode) {
    if (vnode.type === Fragment) {
        vnode.children.forEach(c => unmount(c))
        return
    } else if (typeof vnode.type  === 'object') {
        if (vnode.shouldKeepAlive) {
            vnode.keepAliveInstance._deActive(vnode)
        } else {
            unmount(vnode.component.subTree)
        }
        return
    }
    const parent = vnode.el.parentNode
    if (parent) {
        parent.removeChild(vnode.el)
    }
}

function mountComponent(vnode, container, anchor) {
    const instance = {
        props: shallowReactive(props),
        isMounted: false,
        subTree: null,
        mounted: [],
        keepAliveCtx: null
    }
    const isKeepAlive = vnode.type.__isKeepAlive
    if (isKeepAlive) {
        instance.keepAliveCtx = {
            move(vnode, container, anchor) {
                insert(vnode.component.subTree.el, container, anchor)
            }
        }
    }
}
//自定义缓存实例
const _cache = new Map()
// const cache:keepAliveCache = {
//     get(key) {
//         _cache.get(key)
//     },
//     set(key, value) {
//         _cache.set(key, value)
//     },
//     delete(key) {
//         _cache.delete(key)
//     },
//     forEach(fn) {
//         _cache.forEach(fn)
//     }
// }