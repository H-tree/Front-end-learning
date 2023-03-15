# 箭头函数与普通函数的区别
## 声明方式
声明一个普通函数需要使用关键字function,function既可以声明成一个具名函数也可以声明成一个匿名函数。
声明一个箭头函数只需要箭头就可以,比普通函数更简洁，只能声明成匿名函数。
## this指向
对于普通函数来说，内部的this指向函数运行时所在的对象
箭头函数没有自己的this,指向上层作用域的this
## this改变
普通函数可以通过call,apply,bind改变普通函数的this指向
箭头函数的this执行在定义时就确定了，指向上层的this,无法改变
## prototype
箭头函数没有prototype
## 无法作为构造函数
new的过程
    新建一个空对象->维持原型关系->改变this指向->根据构造函数返回结果返回新对象
没有自己的this,且无法改变this
## arguments
箭头函数没有自己的arguments,会去上层找arguments
## yield
不可以使用yiedl命令，因此箭头函数不能用做generator函数。