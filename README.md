# bitzo-funny-sentence

[![node](https://img.shields.io/badge/node-%3E%3D0.6-blue.svg)](https://nodejs.org/en/download/)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/bitzo-funny-sentence)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

To generate a random funny sentence with a name.

*只是无聊随便写着玩玩的。。好像没什么能用上的地方*

## Download

```bash
npm i bitzo-funny-sentence
```

## API

```javascript
let fst = require('bitzo-funny-sentence');

console.log(fst.geneate(`bitzo`)); //bitzo, 你妈喊你回家吃饭!

//向库中添加自定义的短语
fst.add(name => {
   return `Hello, ` + name + `world! `;
});

for(let i=0; i<10; ++i) {
    console.log(fst.generate(`bitzo`));
}

```