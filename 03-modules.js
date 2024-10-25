// CommonJS, every file is module (by default)
//Modules -Encapsulated Code (only share minimum)
const names = require("./04-name-modules.js");
const service = require("./05-utils.js");
const data = require("./06-alternative-modules.js");

// This will invoke the module immediately if it has a called function inside.
require("./07-mind-grenade.js"); 

service.sayHi(`${names.firstName} ${names.lastName}`);
