const express=require("express");
const app=express();
const router=require('./routes/studentroute')
const mongoose=require('mongoose');
const routerAdmin = require("./routes/adminroute");
const cors = require("cors");

//connect to DataBase
mongoose.connect("mongodb://localhost:27017/libraryManagement",{useNewUrlParser: true})
.then(()=>{console.log('the mongod works on 127.0.0.1:27017 for databse tut')})
.catch((err)=>{console.log(err)});


app.use(express.json());
app.use(cors());
app.use("/student",router);
app.use("/admin",routerAdmin);

app.get('/',(req,res)=>{
    res.send("server started");
})

// create a server
app.listen(3000,()=>{
    console.log("the server run 3000");
})