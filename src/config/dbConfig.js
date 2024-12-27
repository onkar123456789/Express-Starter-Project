const mongoose = require('mongoose');

const serverConfig = require('./serverConfig.js');

async function connectDB(){
 try {
    await mongoose.connect(serverConfig.DB_URL);
    console.log("sucessfully conected to mongodb server");
 } catch (error) {
    console.log("unable to connect mongodb server");
    console.log(error);
    
 }

}

module.exports=connectDB;