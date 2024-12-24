const dotenv = require('dotenv');
dotenv.config();
 // module is a global onject provided by node js and exports is a object in module.
module.exports = {
    PORT :process.env.PORT
}