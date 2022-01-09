module.exports = function reverse (n) {
    let result = '';
    let number = Math.abs(n);
    let str = ''+number;
    let i = 0;
    while (i <= str.length-1) {
        result = str[i] + result;
        i = i+1;
    }
    return Number(result);
}