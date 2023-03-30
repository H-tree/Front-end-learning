var event = {
    clientList: [],
    //收集依赖
    listen: function(key, fn) {
        if (!this.clientList[key]){
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    },
    //触发依赖
    trigger: function() {
        var key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        for (let i = 0,fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    },
    //消除依赖
    remove: function(key, fn) {
        var fns = this.clientList[key];
        if (!fns) {
            return false;
        }
        if (!fn) {
            fns && (fns.length = 0);
        } else {
            for (let l = fns.length; l >=0; l--) {
                var _fn = fns[l];
                if (_fn === fn) {
                    fns.splice(l, 1);
                }
            }
        }

    }
}

var installEvent = function(obj) {
    for (var i in event) {
        obj[i] = event[i];
    }
}

var salesOffices = {};
installEvent(salesOffices);

//小明的订阅
salesOffices.listen('squareMeter88', fn1 = function(price){
    console.log('价格=' + price);
})

//小红的订阅
salesOffices.listen('squareMeter100', fn2 = function(price) {
    console.log('价格=' + price);
})
salesOffices.trigger('squareMeter88', 20000);
salesOffices.trigger('squareMeter100', 30000);
salesOffices.remove('squareMeter88', fn1);
salesOffices.trigger('squareMeter88', 200000);
//发布订阅模式比观察者模式多了一个调度中心