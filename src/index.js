module.exports = function reverse (n) {
    let inputNum = n.toString();
    let enterNum = inputNum.split('');
    let arr = [];
    arr = enterNum.reverse();
    let result = arr.join('');
    return parseInt(result);
};
