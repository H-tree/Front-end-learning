// showName()
// console.log(myname);
// var myname = '此去经年'
// function showName() {
//     console.log('showName');
// }
// showName undefined
//-----------------------------------------
//经过变量提升后
// function showName() {
//     console.log('showName')
// }
// var myname = undefined
// showName()
// console.log(myname);
// myname = '此去经年'
//-----------------------------------------
// var myname = '此去经年' 可以看成两部分 var myname 声明部分, myname ='极客时间' 赋值部分
//-------------------------------------------
// showName()
// var showName = function() {
//     console.log(2);
// }
// function showName() {
//     console.log(1);
// }
// 打印:1
//-----------------------------------------
// 经过变量提升后
// function showName() {console.log(1)}
// showName()
// showName = function() {console.log(2)}
//-----------------------------------------
var a = 10;
function showName() {
    var a = 3;
    console.log(a)
}
showName()
console.log(a);
// 3 10