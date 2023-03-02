//4399笔试
let url =
  "http://www.domain.com/?user=jack&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";
// 实现一个函数： parseParam
// 输入解析后的结果为:

// {
//   user: 'jack',
//   id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
//   city: '北京', // 中文需解码
//   enabled: true, // 未指定值得 key 约定为 true
// }
// encodeURIComponent 不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。
// decodeURIComponent解码
function parseParam(url) {
  const ans = {};
  const paramsArr = url.slice(url.indexOf("?") + 1).split("&");
  for (let i = 0; i < paramsArr.length; i++) {
    let params = paramsArr[i].split("=");
    let key = params[0];
    let value = params.length === 1 ? true : decodeURIComponent(reverse(params[1]));
    if (key in ans) {
      if (Array.isArray(ans[key])) {
        ans[key].push(value);
      } else {
        ans[key] = [ans[key], value];
      }
    } else {
      ans[key] = value;
    }
  }
  return ans;
}
function reverse(value) {
  return parseInt(value) == value ? parseInt(value) : value;
}
console.log(parseParam("http://www.domain.com/?user=jack&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled"));
