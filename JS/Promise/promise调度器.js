//支持并发的调度器， 最多允许2两任务进行处理
// 非promise版本
class Scheduler {
    constructor(limit) {
        this.limit = limit
        this.runCounts = 0;
        this.queue = []
    }
    addTask(time, str) {
        this.queue.push([time, str]);
    }
    start() {
        if (this.runCounts < this.limit && this.queue.length) {
            var [timeOut, str] = this.queue.shift();
            this.runCounts++
            setTimeout(() => {
                console.log(str)
                this.runCounts--
                //直接通知
                this.start()
            }, timeOut);
            this.start();
        }
    }
}
//promise版
//使用一个队列用来存储promise,promise中的resolve当做setTimeout的第一个参数,延迟时间当做第二个参数.then后打印时间
//用一个变量来记录此时运行的并发器中并发的数量
//每进一个runCount++
//执行完后会在.then中执行下一个队列中的函数
class Scheduler {
    constructor(limit) {
        this.queue = [];
        this.limit = limit;
        this.runCounts = 0;
    }

    add(promiseCreator) {
        this.queue.push(promiseCreator);
    }

    taskStart() {
        for (let i = 0; i < this.limit; i++) {
            this.request();
        }
    }

    request() {
        if (this.queue.length && this.runCounts < this.limit ) {
            this.runCounts++;
            this.queue.shift()().then(() => {
            this.runCounts--;
            this.request();
           }) 
        }
    }

   timeOut = time => new Promise(resolve => {
        setTimeout(resolve, time);
        //promise间接通知
    })

   addTask = (time, str) => {
        this.add(() => this.timeOut(time).then(()=>console.log(str)));
   }
}
// async await版
class Scheduler {
    constructor(max) {
        this.max = max
        this.count = 0
        this.queue = []
    }
    async addTask(timer, result) {
    if (this.count >= this.max) {
        await new Promise((resolve) => {
            this.queue.push(resolve);
        })
    }
    this.count++;
    let res = await new Promise(resolve => {
        setTimeout(() => {
            console.log('test')
            resolve(result)
        },timer)
    })
    this.count--
    if (this.queue.length) {
        this.queue.shift()()
    }
    console.log(res);
    return res;
    }
}
//请实现一个支持并发的调度器， 最多同时允许两任务进行处理
const scheduler = new Scheduler(2)
scheduler.addTask(1000, '1');   // 1s后输出’1'
scheduler.addTask(2000, '2');  // 2s后输出’2'
scheduler.addTask(1000, '3');  // 2s后输出’3'
scheduler.addTask(1000, '4');  // 3s后输出’4'
scheduler.taskStart();
//总结
// 首先要保证顺序，就需要一个队列来存储每次加进去的任务
// 当一个任务执行完毕就需要通知下一个任务执行,这里通知就有多种方法,直接通知，或promise间接通知