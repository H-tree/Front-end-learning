# 组件通信
1.props   父->子
2.emit    字->父
3.refs 
获取子组件实例,调用子组件方法
4.v-model 子->父,父->子 
v-model本质是v-bind和input事件的语法糖,所以可以通过props来进行父传子，通过input事件来进行子传父。
5.provide/inject 父->子 可跨多层
6.EventBus
7.vuex或pinia