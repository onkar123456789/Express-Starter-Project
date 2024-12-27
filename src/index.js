const express = require('express');
// const bodyParser =require('body-parser')

const serverConfig = require('./config/serverConfig.js');
const connectDB =require('./config/dbConfig.js')

const app = express();


app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended : true})); //it is using qs library as we give extended true.



app.listen(serverConfig.PORT, async()=>{
  await connectDB();
  console.log(`Server is running on ${serverConfig.PORT}`);

});  


