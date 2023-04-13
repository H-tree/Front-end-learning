let SDK = null; //实例对象
const QUEUE = [] //任务队列
const NOOP = (v) => v
const reportWebVitals = (onPerEntry) => {
    if (onPerfEntry && onPerEntry instanceof Function) {
        import('web-Vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
            getCLS(onPerfEntry) // 布局偏移量
            getFID(onPerfEntry) // 首次输入延迟时间
            getFCP(onPerfEntry) // 首次内容渲染时间
            getLCP(onPerfEntry) // 首次最大内容渲染时间
            getTTFB(onPerfEntry) // 首个字节到达时间
        })
    }
}

export default class EasyAgentSDK {
    appId = ''
    baseURL = ''
    timeOnPage = 0
    config = {}
    onPageShow = null
    onPagesHide = null
    constructor(options = {}) {
        if (SDK) return
        SDK = this
        this.appId = options.appId
        this.baseURL = options.baseURL || window.location.origin
        this.onPageShow = options.onPageShow || NOOP
        this.onPagesHide = options.onPagesHide  || NOOP
        //初始化监听页面
        this.listenPage()
    }
    setConfig(config) {
        this.config = config
    }
    //刷新任务队列
    flushQueue() {
        Promise.resolve().then(()=>{
            QUEUE.forEach((fn) => fn())
            QUEUE.length = 0
        })
    }
    listenPage() {
        let pageShowTime = 0
        window.addEventListener('pageshow', () => {
            pageShowTime = performance.now()
            //页面性能指标上报
            reportWebVitals((data) => {
                this.performanceReport({data})
            })
            this.onPageShow();
        })
    }
}