//浅拷贝
let a = {
    name: 'hbs',
    book: {
        title: 'You Don',
        price: '6'
    }
}
// Object.create
let m = Object.create(a);
m.name = 'f'
console.log(m,a)
// Object.assign
let c = {sex:'man'}
let b = Object.assign(c, a, {age: 18}, {job: 'student'});
console.log(b === c, b) //true
// 拓展运算符
let e = {...a}
console.log(e) //{ name: 'hbs', book: { title: 'You Don', price: '6' } }
// slice
let f = [1, 2, [3, 4]];
let g = f.slice(1);
g[1][0] = 0;
console.log(f) //[ 1, 2, [ 0, 4 ] ]
// concat
let newArr = f.concat();
newArr[2][0] = 2;
console.log(f) //[ 1, 2, [ 2, 4 ] ]