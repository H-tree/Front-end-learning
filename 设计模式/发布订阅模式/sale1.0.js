//模拟 售楼部和客户之间的通知关系1.0
const salesOffices = {} //售楼处，发布者
salesOffices.clientList = []; //存放订阅者，缓存列表
salesOffices.listen = function(fn) {
    this.clientList.push(fn); //增加订阅
}
// salesOffices.trigger = function() {
//     for (let i = 0; i < this.clientList.length; i++) {
//         this.clientList[i].apply( this, arguments);
//     }
// }
salesOffices.trigger = function() {
    for(var i = 0,fn; fn = this.clientList[i++];) {
        console.log(i);;
        fn.apply( this, arguments);
    }
}
salesOffices.listen( function(price, squareMeter) {
    console.log('价格=' + price);
    console.log('squareMeter=' + squareMeter);
})
salesOffices.listen( function(price, squareMeter) {
    console.log('价格=' + price);
    console.log('squaeMetert=' + squareMeter )
})
salesOffices.trigger(2000000, 88);
salesOffices.trigger(3000000, 110);
//缺陷没有专有化定制