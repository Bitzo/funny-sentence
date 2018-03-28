# bitzo-funny-sentence

[![node](https://img.shields.io/badge/node-%3E%3D0.6-blue.svg)](https://nodejs.org/en/download/)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/bitzo-funny-sentence)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

To generate a random funny sentence with a name.

<br>

*只是无聊随便写着玩玩的。。用以测试下npm的publish功能。。*

*不想学书上直接写个HelloWorld*

*不过这种无聊的功能，好像也没什么能用上的地方 /手动摊手*

<br>

*Just test `npm publish`.*

*This module has nothing to do with your project.*

*So ... Ignore it*

## Author

bitzo [http://blog.bitzo.cn](http://blog.bitzo.cn)

## Download

```bash
npm i bitzo-funny-sentence
```

## API

```javascript
const fst = require('bitzo-funny-sentence');

console.log(fst.geneate('bitzo')); // bitzo, 你妈喊你回家吃饭!

// 向库中添加自定义的短语
fst.add(name => `Hello, ` + name + `world! `);

for(let i=0; i<10; ++i) {
    console.log(fst.generate(`bitzo`));
}

// bitzo，来啊，互相伤害啊！
// bitzo, 你咋这么厉害呢
// 你去吃土吧，bitzo 。
// bitzo, 你咋这么厉害呢
// bitzo, 你妈喊你回家吃饭！
// 你去吃土吧，bitzo 。
// 我 bitzo 还会回来的！
// bitzo, 你妈喊你回家吃饭！
// 我 bitzo 还会回来的！
// bitzo, 你妈喊你回家吃饭！

```
