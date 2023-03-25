for (var i = 1; i <=5; i++) {
    setTimeout(function(){
        console.log(i);
    }, 0)
}
//setTimeout为宏任务，由于JS中单线程事件循环机制，在主线程同步任务执行完后才去执行宏任务，因此循环结束后setTimeout中的回调才依次执行。
//setTimeout也是一种闭包，往上找它的父级作用域也就是window
//一.使用IIFE(立即执行函数)
for (var i = 1; i <=5; i++) {
    (function(j) {
    setTimeout(function(){
        console.log(j);
    }, 0)
    })(i)
}
//二.使用ES6中的let
for (let i = 1; i <=5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0)
}
//三.定时器传入第三个参数
for (var i = 1; i <= 5; i++) {
    setTimeout(function(i) {
        console.log(j);
    }, 0, i)
}