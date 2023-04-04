// var googleMap = {
//     show: function() {
//         console.log('开始渲染谷歌地图');
//     }
// };
// var baiduMap = {
//     display: function() {
//         console.log('开始渲染百度地图');
//     }
// }
// var renderMap = function(map) {
//     if (map.show instanceof Function) {
//         map.show();
//     }
// }
// var baiduMapAdapter = {
//     show: function() {
//         return baiduMap.display();
//     }
// }
// renderMap(googleMap);
// renderMap(baiduMapAdapter)
var getGuangdongCity = function() {
    let guangdongCity = [
        {
            name: 'shenzhen',
            id: 11,
        }, {
            name: 'guangzhou',
            id: 12,
        }
    ];
    return guangdongCity
}

var guangdongCity = {
    shenzhen: 11,
    guangzhou: 12,
    zhuhai: 13
}

var addressAdapter = function(oldAddressfn) {
    var address = {},
    oldAddress = oldAddressfn();
    for (let i = 0; i < oldAddress.length; i++) {
        address[oldAddress[i].name] = oldAddress[i].id;
    }
    return function() {
        return address;
    }
}
var render = function(fn) {
    console.log('开始渲染');
    console.log(JSON.stringify(fn()));
}
console.log(getGuangdongCity())
render(addressAdapter(getGuangdongCity));
//日常用电一般是220V,电脑用的要20V,过程中就需要一个适配器做转换，将220v换成20v