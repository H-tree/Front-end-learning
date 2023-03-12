
# moveTo(x, y)
设置初始位置，参数为初始位置x和y的坐标点
# lineTo(x, y)
绘制一条从初始位置到指定位置的直线，参数为指定位置x和y的坐标点
# stroke()
通过线条来绘制图形轮廓
# strokeRect(x, y, width, height)
绘制一个矩形的边框
# fillRect(x, y, width, height)
绘制一个填充的矩形
# clearRect(x, y, width, height)
清除指定矩形区域,让清除部分完全透明
# arc(x, y, radius, startAngle, endAngle, anticlockwise)
绘制圆弧或圆,起点x,起点y,起始弧度,结束弧度,顺逆时针，默认为false顺时针
# ctx.fill
填充路径的内容区域
# ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)
椭圆,rotation：旋转角度
# quadraticCurveTo(cp1x, cp1y, x, y)
二次贝塞尔曲线,cp1x,cp1y为控制点 x,y为结束点
# bezierCurveTo(cp1x,cp1y, cp2x,cp2y, x, y)
三次贝塞尔曲线,有两个控制点
# lineWidth 
线条粗细
# lineCap
线帽(端点),butt:默认样式,round:加个半圆,square:加个矩形
# lineJoin
两个线段连接处所显示的样子：round,bevel,miter