Function.prototype.myBind = function(context, ...args) {
    var self = this;
    var fbound = function() {
        //返回值给new,new再根据返回结果判断return值
       return self.apply(this instanceof self ? this : context, args.concat(Array.from(arguments)));
        //如果是new,new出来的实例的this指向实例对象，根据实例对象的__proto__指向prototype判断
    }
    if (this.prototype) {
        //维持原型关系
        fbound.prototype = Object.create(this.prototype);
    }
    return fbound
}
function car(able) {
    let color = this.color;
    let ability = able;
    console.log(this);
    return color;
  }
  
  let bike = {
    color: "blue",
  };
console.log(car.bind(bike, ["run"])); //[Function: bound car]
console.log(car.myBind(bike, ["run"])) //[Function: fbound]
console.log(car.bind(bike, ["run"])()); //blue
console.log(car.myBind(bike, ["run"])()) //blue
// 类数组转数组 
// Array.from()
// Array.prototype.slice.call(arguments)
// Array.prototype.splice.call(arguments, 0)
// Array.prototype.concat.apply([], arguments);
// ...
// https://github.com/lodash/lodash/blob/master/slice.js slice的实现其中用 返回的新数组[i] = 类数组[i];
