const express = require('express');

const serverConfig = require('./config/serverConfig.js');

const app = express();

app.listen(serverConfig.PORT, ()=>{

  console.log(`Server is running on ${serverConfig.PORT}`);

}) 