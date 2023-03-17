# Flex (弹性容器)
给元素添加display:flex，该元素变成一个弹性容器(flex container),它的直接子元素变成了弹性子元素，弹性子元素默认是在同一行按照从左到右的顺序并排排列，弹性子元素不一定填满其弹性容器的宽度。
# 处理兼容性
Saferi8
.xx{
display:-webkit-flex /Saferi8
display:flex

flex:1
-webkit-flex:1
}
IE10 
.xx{
    display:-ms-flexbox; /IE10
    display:-webkit-flex
    display:flex
}
使用:Autoprefixer
# flex  （子元素）
flex属性是 flex-grow,flex-shrink,flex-basis的简写
flex:2           等价于:flex-grow:2 flex-shrink:1 flex-basis:0%
flex:1           等价于：flex-grow:1 flex-shrink: 1 flex-basis:0%
flex用于实现均分弹性容器的宽度。
# flex-basis    (子元素)
定义了弹性子元素大小的基准值，即初始的"主尺寸"，默认是auto,此时会检测元素是否设置了width属性值,如果有,就使用width，否则，就用元素内容自身的大小。
# flex-grow    (子元素)
每个弹性子元素的flex-basis的值计算出来后，它们(加上子元素之间的外边距)加起来会占据一定的宽度，加起来的宽度不一定正好填满弹性容器的宽度，多出来的宽度会按flex-grow的值分配给每一个弹性子元素。 
# flex-shrink (子元素)
与flex-grow遵循相似的原则，计算出弹性子元素的初始主尺寸，累计值可能会超出弹性容器的可用宽度，溢出部分会根据flex-shrink的比例进行收缩进行收缩，默认值为1。
# flex-direction  （弹性容器）
切换主副轴的方向
默认值:flex-direction:row
flex-direction:row-reverse 从右向左排列
flex-direction:column       将y轴变为主轴
flex-direction:column-reverse 将y轴变为主轴从下向上排列
# flex-wrap   (弹性容器)
弹性子元素是否会在弹性容器内折行显示
换行会产生间距
flex-wrap:wrap   换行(默认flex-shrink为1不会溢出，设置wrap溢出就会换行)
flex-wrap:nowrap  不换行
flex-wrap:wrap-reverse 第一行和第二行切换位置
# flex-flow (弹性容器)
<flex-direction><flex-wrap>的简写
# justify-content (弹性容器)(形象记忆，一排韭菜)
水平方向上移动，不改变原本的顺序
justify-content:flex-start  移至最左
justify-content:flex-end    移至最右
justify-content:center      移至中间
justify-content:space-between 移至两边，中间保持相等间隔
justify-content:space-around   移至两边，最左和最右的间隔为中间间隔的一半
# align-items (弹性容器)
水平方向上的对齐位置
align-items:flex-start
align-items:flex-end
align-items:center  居中对齐
align-items:stretch  默认值 如果子元素没设置高度就拉升至容器高度
align-items:baseline 文本对齐，如果没有文本则和另一个子元素的下border对齐
# align-content
控制子元素在副轴上的行距。
在开启flex-wrap:wrap生效，如果未开启则忽略align-content.
align-content:flex-start 离主轴最近，且无行距
align-content:flex-end      离主轴最远，且无行距
align-content:center       多行居中
align-content:stretch     默认值，有行距
align-content:space-between 最靠边部分无行距
align-content:between-around 最靠边部分有行距且为中间的一半