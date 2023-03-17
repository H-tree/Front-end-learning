---
theme: channing-cyan
---
# flex

![flex布局.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abc73687409b46f48fa57522f8d71d4f~tplv-k3u1fbpfcp-watermark.image?)
## flex基本概念
要了解flex布局，首先需要了解两个核心的概念 **容器** 和 **轴**。


![基本概念.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0102bcd21dc34dbbbe453fa6f40850fe~tplv-k3u1fbpfcp-watermark.image?)

#### 容器
- 父容器(container): 添加了属性display:flex的容器
- 子容器(item):父容器的直接子元素
#### 轴
   
- 主轴(main axis):默认从左到右
- 交叉轴(cross axis):垂直于主轴,从上到下。
### 父容器
#### flex-direction
指定主轴方向，副轴垂直于主轴。
```
<style>
    .container {
        display: flex;
        width: 400px;
        height: 250px;
        flex-direction:? //
        border: 1px solid rgba(0, 0, 0, 1);
    }

    .item1 {
        width: 100px;
        height: 100px;
        background-color: rgb(135, 206, 250);
    }

    .item2 {
        width: 100px;
        height: 100px;
        background-color: rgb(127, 255, 170);
    }
</style>
<body>
    <div class="container">
        <div class="item1"></div>
        <div class="item2"></div>
    </div>
</body>
```
- flex-direction:row 指定主轴为横轴，方向从左到右.
![无标题.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5523c8ec783644028831bcd98b85061c~tplv-k3u1fbpfcp-watermark.image?)
- flex-direction:row-reverse 指定主轴为横轴，方向从右到左
![fdrr.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f12fd6cb6bed480baeb6d77e2d4ac682~tplv-k3u1fbpfcp-watermark.image?)
- flex-direction:column 指定主轴为竖轴方向从上到下
![fdc.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03c26e7a501d47d5bfba136e0e42be8b~tplv-k3u1fbpfcp-watermark.image?)
- flex-direction:column-reverse 指定主轴为竖轴方向从下到上

![fdcr.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bdc9d005232f4834b85665b5bdbef04b~tplv-k3u1fbpfcp-watermark.image?)
#### flex-wrap
设置子容器是否换行，换行后是否逆序。
```
<style>
    .container {
        display: flex;
        width: 250px;
        height: 250px;
        flex-wrap:?;
        border: 1px solid rgba(0, 0, 0, 1);
    }

    .item1 {
        width: 100px;
        height: 100px;
        background-color: rgb(135, 206, 250);
    }

    .item2 {
        width: 100px;
        height: 100px;
        background-color: rgb(127, 255, 170);
    }
    .item3{
        width: 100px;
        height: 100px;
        background-color: rgb(190, 172, 172);
    }
</style>
<body>
    <div class="container">
        <div class="item1"></div>
        <div class="item2"></div>
        <div class="item3"></div>
    </div>
</body>
```
- flex-wrap:nowrap  不换行


![frn.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62bd6e34ed2f458198b54890b7cbed52~tplv-k3u1fbpfcp-watermark.image?)
- flex-wrap:wrap 超出父容器宽度则换行


![frw.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f159696a0614ca590c242ae7c506688~tplv-k3u1fbpfcp-watermark.image?)
- flex-wrap:wrap-reverse 超出父容器宽度则逆序换行

![frwr.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d46a5a74da334f6aa64809b8e7ba782a~tplv-k3u1fbpfcp-watermark.image?)
#### flex-flow
flex-flow是 flex-direction 和 flex-wrap 的简写
#### justify-content
```
<style>
    .container {
        display: flex;
        width: 350px;
        height: 250px;
        justify-content:?;
        border: 1px solid rgba(0, 0, 0, 1);
    }
    .item1 {
        width: 100px;
        height: 100px;
        background-color: rgb(135, 206, 250);
    }
    .item2 {
        width: 100px;
        height: 100px;
        background-color: rgb(127, 255, 170);
    }
    .item3{
        width: 100px;
        height: 100px;
        background-color: rgb(190, 172, 172);
    }
</style>
<body>
    <div class="container">
        <div class="item1"></div>
        <div class="item2"></div>
        <div class="item3"></div>
    </div>
</body>
```
控制子容器未填满父容器主轴时，子容器在主轴上所在的位置以及间距。
- flex-start 子容器对齐主轴的起点

![jcfs.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b066c7ad3c7e407c80ff0fd07336b12d~tplv-k3u1fbpfcp-watermark.image?)
- center 子容器在主轴上居中

![jcc.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/768e2ee43cf94ed7aa0ac7a7d7955cef~tplv-k3u1fbpfcp-watermark.image?)
- flex-end 子容器对齐主轴的终点

![jcfe.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e3e2b75859424789a7e18b62261d0735~tplv-k3u1fbpfcp-watermark.image?)
- space-between 子容器两端对齐，间距相等。

![jcsb.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a5be90e9e0e7498ea2ed3efcc8b40f12~tplv-k3u1fbpfcp-watermark.image?)
- space-around 最两边的间距是中间间距的一半。
![jcba.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8fef2b8007e84d669322c72e04c03291~tplv-k3u1fbpfcp-watermark.image?)
#### align-items
控制子容器未填满父容器交叉轴时，子容器在交叉轴上所在的位置。
```
<style>
    .container {
        display: flex;
        width: 350px;
        height: 250px;
        align-items: ?;
        border: 1px solid rgba(0, 0, 0, 1);
    }
    .item1 {
        width: 100px;
        height: 100px;
        background-color: rgb(135, 206, 250);
    }
    .item2 {
        font-size: 25px;
        width: 100px;
        height: 100px;
        background-color: rgb(127, 255, 170);
    }
    .item3{
        font-size: 35px;
        width: 100px;
        height: 100px;
        background-color: rgb(190, 172, 172);
    }
</style>
<body>
    <div class="container">
        <div class="item1"></div>
        <div class="item2"></div>
        <div class="item3"></div>
    </div>
</body>
```
- flex-start 子容器对齐交叉轴的起点
![jcfs.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b066c7ad3c7e407c80ff0fd07336b12d~tplv-k3u1fbpfcp-watermark.image?)
- center 子容器在交叉轴上居中

![aic.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3812ac531adf42e9b2cc81fe05ac33a3~tplv-k3u1fbpfcp-watermark.image?)
- flex-end 子容器对齐交叉轴的终点

![aife.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e370cbb785934ac0a44e8187495f489b~tplv-k3u1fbpfcp-watermark.image?)
- stretch 默认属性,子容器在交叉轴上不设置距离(此处为高)或auto时，长度铺满父容器。
此处将item1的高度去除或设为auto.
![ais.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec9e1bc4010049a39d7eb470017cc530~tplv-k3u1fbpfcp-watermark.image?)
此处以竖轴为主轴,并将item1的宽度去除或设为auto(此处主轴子容器超过父容器产生了收缩，下面会讲到收缩.)

![ais2.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49525eeb202e4fa682086b552693c841~tplv-k3u1fbpfcp-watermark.image?)
- baseline 以文字的基准对齐

![aib.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac34f05c289a4f8e8e73a4e7f47071e5~tplv-k3u1fbpfcp-watermark.image?)
#### align-content
控制多行子容器在交叉轴上的位置，以及间距。(如果子容器没有换行，align-content就会被忽略)
-flex-start 子容器对齐交叉轴起点

![acfs.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b07ab51268c4a47821977372a22e5d0~tplv-k3u1fbpfcp-watermark.image?)
-center 子容器在交叉轴上居中


![acc.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/25101f44ca5f46df93b2fe1a796a3f97~tplv-k3u1fbpfcp-watermark.image?)
-flex-end 子容器对齐交叉轴终点

![acfe.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e51a8801e6e441afa685581e920523c0~tplv-k3u1fbpfcp-watermark.image?)
- stretch 默认属性，

