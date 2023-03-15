let fn = name => {
    console.log(name)
}
let fn2 = function(name) {
    console.log(name)
}
let fn3 = function haha() {
    console.log('test')
}
let foo = name => ({ name, job: 'front end'});
fn3();
var name = 'hhh';
var person = {
    name: 'ikun',
    say: function() {
        console.log(this.name);
    },
    say2: () => {
        console.log(this.name);
    }
}
person.say();  // ikun
person.say2(); // 'hhh'
person.say2.call({name:'Hu'}) //'hhh'
person.say.call({name: 'Hu'}) //Hu
//字面量对象需要使用括号包裹