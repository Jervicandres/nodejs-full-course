const { readFileSync, writeFileSync } = require("fs");
console.log("start");
// readFileSync gets the content of the file;
const first = readFileSync("./content/first.txt","utf8");
const second = readFileSync("./content/second.txt","utf8");

// writeFileSync creates a file with contents provided in 2nd parameter
// 3rd parameter is an object, we called flag: "a" so the value would append to the file.
writeFileSync(
    "./content/result-sync.txt", 
    `Here is the result:\n ${first}\n ${second}
    `,
    {flag: "a"}
);
console.log("done with this task");
console.log("starting the next one");