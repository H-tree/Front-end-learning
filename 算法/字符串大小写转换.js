//来源:同花顺,乐刻运动笔试
function strChange(arg) {
    const strArr = arg.split('');
    for (let i = 0; i <strArr.length; i++) {
        if (strArr[i] >= 'A' && strArr[i] <= 'Z') {
            strArr[i] = strArr[i].toLowerCase();
        } else if (strArr[i] >= 'a' && strArr[i] <= 'z') {
            strArr[i] = strArr[i].toUpperCase();
        } 
    }
    return strArr.join('')
}
console.log(strChange('AbCd'))