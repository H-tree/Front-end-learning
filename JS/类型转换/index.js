[] == ![] // true
// !优先级更高 false , [] = false,boolean与其他, [] = 0, 引用与其他， 0 = 0;

[] == 0  // true
// 引用与其他 0 = 0
[2] == 2  // true
// 引用与其他 '2' == 2 数字与字符串 2 == 2
['0'] == false  // true
// 引用与其他 '0' == 0 数字与字符串 0 == 0
'0' == false  // true
//Boolean遇其他 '0' == 0 数字与字符串 0 == 0
[] == false  // true
// Boolean与其他 [] == 0 引用与其他 0 == 0
[null] == 0  // true
// 引用与其他 '' == 0 数字与字符 0 == 0
null == 0  // false

[null] == false 

null == false 

[undefined] == false 

undefined == false 
//[null].toString = '',[underfied].toString()=''


let result = 100 + true + 21.2 + null + undefined + "Tencent" + [] + null + 9 + false;
// 100 + true ToNumber() 101
// 101 + 21.2 = 122.2
// 122.2 + null ToNumber() 122.2
// 122.2 + underfined  ToNumber() 122.2 + NaN = NaN
// NaN + 'Tencent' 遇到字符串 = 'NaN' + 'Tencent'
// 'NaNTencent' + [] = 'NaNTencent'
// 'NaNTencent' + null = 'NaNTencentnull'
// 'NaNTencentnull' + 9 = 'NaNTencentnull9'
// 'NaNTencentnull9' + false = 'NaNTencentnull9false'