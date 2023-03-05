function Parent1() {
    this.name = 'parent1';
    this.play = [1, 2, 3]
}
function Child1() {
    this.type = 'child2';
}
Child1.prototype = new Parent1();
console.log(new Child1())
var s1 = new Child1();
var s2 = new Child1();
s1.play.push(4);
console.log(s1.play, s2.play) //[1, 2, 3, 4] [1, 2, 3, 4]
//共享原型对象，当一个发生变化另一个也会发生变化