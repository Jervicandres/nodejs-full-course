// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
let seconds = 0;
const timer = setInterval(() => {
    console.log(`${seconds} seconds have passed`);
    seconds+=2;
    if(seconds > 10)
    {
        clearInterval(timer);
    }
},2000)