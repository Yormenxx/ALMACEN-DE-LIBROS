const { isUtf8 } = require("buffer");
const {Router} = require("express");
const fs = require("fs")
const router = Router();
const { uuid } = require('uuidv4');

const jsonBooks =fs.readFileSync("src/books.json","utf-8")

let books = JSON.parse(jsonBooks)


router.get("/",(req,res)=>{

    res.render("index.ejs",{
        books
    })

})


router.get("/new-data", (req,res)=>{
    res.render("new-data.ejs");
})



router.post("/new-data", (req,res)=>{

    const {title, author, images, description} = req.body;

    if(!title || !author || !images || !description ){
        res.status(400).send("Faltan campos por ingresar")
        return;
    }
    let newBook ={
        id:uuid(),
        title,
        author,
        images,
        description
    };

    books.push(newBook)

    const jsonBooks = JSON.stringify(books)

    fs.writeFileSync("src/books.json",jsonBooks,"utf-8")

    res.redirect("/")
})


router.get("/delete/:id",(req, res)=>{

    books = books.filter(book => book.id != req.params.id)

    const jsonBooks = JSON.stringify(books)

    fs.writeFileSync("src/books.json",jsonBooks,"utf-8")

    res.redirect("/")
    
})
module.exports=router;