/**
 * @Author: bitzo
 * @Date: 2017/7/3 14:54
 * @Last Modified by: bitzo
 * @Last Modified time: 2017/7/3 14:54
 * @Function:
 */

let funnySet = require('./funnySet');

exports.add = function (func) {
    funnySet.push(func);
};

exports.generate = function (name) {
    let i = Math.random()*funnySet.length;

    return funnySet[Math.floor(i)](name);
};


