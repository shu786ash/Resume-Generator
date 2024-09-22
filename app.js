const dotenv=require('dotenv');
dotenv.config({path:"dotconfig.env"});
const express=require('express');
const app=express();
const port=8080;
const cors = require('cors');
app.use(cors());
const Connect=require('./databaseConnection');
Connect();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

const router = require('./Routes/route')

app.use('/',router);

app.listen(port,(req,res)=>{
    console.log(`App is listening at port ${port}`);
})
