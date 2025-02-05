// OS is a built-in module
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);


// Method that returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime().toFixed(0)}` );

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOS);