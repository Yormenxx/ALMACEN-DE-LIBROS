
const express = require("express");
const app = express();
const path = require("path")
const logger = require("morgan")


//setting

app.set("port",3000)
app.set("views", path.join(__dirname,"views"))
app.set("view engine","ejs")

//middleware

app.use(logger("dev"))

app.use(express.urlencoded({extended:false}))


//routes


app.use(require("./routes/index"))


//static

app.use(express.static(path.join(__dirname, "public")))


// 404 error

app.use((req,res,next)=>{
    res.status(404).send("404 not found")
})







module.exports=app;