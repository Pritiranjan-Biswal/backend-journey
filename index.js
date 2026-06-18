const express=require("express")
const app=express()

//load config env file

require("dotenv").config();
const PORT =  process.env.PORT || 4000;

//middlewwear to parse json body

app.use(express.json());

//import  routes for todo route api

const todoRoutes=require("./routes/todos")

//mount the api todos

app.use("/api/v1", todoRoutes)

app.listen(PORT, () =>{
    console.log(`server started at ${PORT}`);
    
    
})

//connect db 
const dbConnect=require("./config/database")
dbConnect();


//default route

app.get("/", (req, res) => {
    res.send(`<h3>This is a home page</h3>`)
})