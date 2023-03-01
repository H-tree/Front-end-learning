Function.prototype.myApply = function(context, args) {
    var context = context || window;
    const fn = Symbol('fn')
    context[fn] = this;
    const result = context[fn](...args);
    delete context.fn;
    return result;
}
//此处使用Symbol防止属性名和context本身上的属性重到
function car(able) {
    let color = this.color;
    let ability = able;
    return color;
  }
  
  let bike = {
    color: "blue",
  };
console.log(car.apply(bike, ["run"])); //blue
console.log(car.myApply(bike, ["run"])) //blue