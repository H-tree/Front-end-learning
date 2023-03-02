# 隐式类型转换
| 原始值       | 字符串          | 数字      | 布尔值    |
| ------      | --------        | ------   | --------  |
| undefined   | "undefined"     | NaN      | false     |
| null        |  "null"         | 0        | false     |
| true        |  "true"         | 1        |           |
| false       |  "false"        | 0        | false     |
| " "         |                 | 0        | false     |
| []          |  join()         | 0        | true      |
| 0           |  "0"            |          | false     |
| NaN         |  "NaN"          |          | false     |
| {}          |  " "            | NaN      | true      |   
false、null、undefined、空字符、0和NaN，其它值转为布尔型都为true
数组转字符串会join()
## ToPrimitive
先valueOf,如果不是基本数据类型再toString()
## 一元操作符
+
调用ToNumber(),如果是对象则ToPrimitive()
## 二元操作符
v1 = ToPrimitive(val1)
v2 = ToPrimitive(val2)
如果v1是字符串或者v2是字符串，那么返回ToString(v1)和ToString(v2)的拼接结果
ToNumber(v1)和ToNumber(v2)的运算结果
new Date(2022,05,20)会跳过valueOf()
## == 比较
### null和undefied
null和undefied相等,和其他都不相等
### 布尔和其他
布尔先转数字
### 数字和字符串
字符串转数字
### 引用和原始
引用ToPrimitive