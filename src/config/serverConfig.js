const dotenv = require('dotenv');
dotenv.config();
 // module is a global onject provided by node js and exports is a object in module.

//exporting all the env variables that the project uses.
 module.exports = {
    PORT :process.env.PORT,
    DB_URL :process.env.DB_URL

}