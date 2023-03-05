function Parent3 () {
    this.name = 'parent3'
    this.play = [1, 2, 3];
}

Parent3.prototype.getName = function() {
    return this.name;
}

function Child3() {
    Parent3.call(this);
    this.type = 'child3'
}

Child3.prototype = new Parent3();
console.log(Child3.prototype.constructor )
//construtor反指向构造函数
Child3.prototype.constructor = Child3;
//原型要改个名字
var s3 = new Child3();
var s4 = new Child3();
s3.play.push(4);
console.log(s3.play, s4.play);// [ 1, 2, 3, 4 ] [ 1, 2, 3 ]
console.log(s3.getName()); //parent3
console.log(s4.getName()); //parent3
//不够优雅，调用了两次Parents
//结合原型链继承和构造函数继承