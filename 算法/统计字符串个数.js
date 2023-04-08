function run(str){
    return str.split("").reduce((a,b)=>(
    a[b]++||(a[b]=1),a
    ),{});
}
console.log(run('abcda'))
//逗号表达式
//从左往右计算，将最右边的值返回
let c = (1,2,3,4,5)
console.log(c)
let a = {}
console.log(c['a']++)//NaN 