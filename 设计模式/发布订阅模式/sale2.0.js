//模拟 售楼部和客户之间的通知关系2.0
var salesOffices = {};
salesOffices.clientList = {};
salesOffices.listen = function(key, fn) {
    if (!this.clientList[key]) {
        this.clientList[key] = [];
    }
    //如果没有订阅此类消息，给此类消息创建一个缓存列表
    this.clientList[key].push(fn);
    //订阅的消息添加进消息缓存列表
}
salesOffices.trigger = function() {
    var key = Array.prototype.shift.call(arguments);
    fns = this.clientList[key];
    if (!fns || fns.length === 0) {
        return false;
    }
    for (let i = 0,fn; fn =fns[i++];) {
        fn.apply(this, arguments)
    }
}
salesOffices.listen('squareMeter88', function(price) {
    console.log('价格=' + price);
})
salesOffices.listen('squareMeter110', function(price) {
    console.log('价格=' + price);
})
salesOffices.trigger('squareMeter88', 20000);
salesOffices.trigger('squareMeter110', 30000)
//可配合vue的响应式来理解，收集依赖Dep