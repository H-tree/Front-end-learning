# 事件委托
利用冒泡或捕获将子元素的事件绑定在父元素上。
## 事件流的三个阶段
捕获阶段->目标阶段->冒泡阶段
## 阻止冒泡或捕获
e.stopPropagation()
## addEventListener
addEventListener有三个参数，第三个参数默认是false,表示在冒泡阶段调用