/**
 * @Author: bitzo
 * @Date: 2017/7/3 14:54
 * @Last Modified by: bitzo
 * @Last Modified time: 2017/7/3 14:54
 * @Function:
 */

const funnySet = require('./funnySet');

const add = (func) => {
  funnySet.push(func);
};

const generate = (name) => {
  const i = Math.random() * funnySet.length;
  return funnySet[Math.floor(i)](name);
};

module.exports = {
  add,
  generate,
};
