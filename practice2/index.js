const express=require("express")
const app=express();

require("dotenv").config();
const PORT= process.env.PORT || 3000;

// middleware

app.use(express.json());

const blog=require("./routes/blog")

//mount

app.use("/api/v1", blog)


const connectWithDb=require("./config/database");
connectWithDb();

//start the server

app.listen(PORT, ()=> {
    console.log(`App is started at ${PORT}`);
    
})

app.get("/" ,(req, res) => {
    req.send(<h3>This is my home page </h3>)
})