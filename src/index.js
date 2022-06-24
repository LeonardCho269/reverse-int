module.exports = function reverse (n) {
    n = n + '';
    let revText = n.split('').reverse().join('');
    let revNum = parseInt(revText, 10);
    return revNum;
}
