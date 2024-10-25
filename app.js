//npm --v
//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm i -g <packageName

//package.json - manifest file (stores important info about project/package)
// manual approach - create package.json in the root, create the properties yourself
// npm init - there will be set of questions for configuration
// npm init -y - everything will be default

const _ = require("lodash");

const items = [1, [2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);