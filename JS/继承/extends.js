class Person {
    constructor(name) {
        this.name = name;
        this.age = 10
    }

    getName = function() {
        console.log('Person:', this.name);
    }
}

class Gamer extends Person{
    constructor(name, age) {
        //子类中存在构造函数,则需要在使用'this'之前首先调用super()
        super(name);
        // this.age = age;
    }
}
const asuna = new Gamer('Asuna', 20);
asuna.getName()
console.log(asuna.age) //10