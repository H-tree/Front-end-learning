function Parent1() {
    this.name = 'parent1';
}

Parent1.prototype.getName = function() {
    return this.name;
}

function Child1() {
    Parent1.call(this);
    this.type = 'child1'
}

let child = new Child1();
console.log(child); // { name: 'parent1', type: 'child1'}
console.log(child.getName()) // child.getName is not a function
//父构造函数原型身上的方法无法继承