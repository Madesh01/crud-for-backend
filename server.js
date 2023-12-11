const express=require("express");

const app = express();

const taskRouter = require("./task/task");

app.use(express.json());

app.use("/task",taskRouter );
app.get("/",(req,res)=>{
    res.send("server route is working");
});

app.listen(4000,()=>{
console.log("server is up and running");
});