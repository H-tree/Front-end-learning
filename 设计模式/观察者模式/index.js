//观察者
class Observer {
    constructor(cb) {
        if (typeof cb === 'function') {
            this.cb = cb
        } else {
            throw new Error('Observer构造器必须传入函数类型')
        }
    }
    update() {
        this.cb()
    }
}
//目标对象
class Subject {
    constructor() {
        this.observerList = []
    }
    addObserver(observer) {
        //目标对象存入观察者
        this.observerList.push(observer)
    }
    notify() {
        this.observerList.forEach(observer => {
            observer.update()
        })
    }
}
const observerCallback = function() {
    console.log('我被通知了');
}
const observer = new Observer(observerCallback)

const subject = new Subject();
subject.addObserver(observer);
subject.notify();