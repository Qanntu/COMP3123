const express = require("express")

const BookModel = require("../models/books")

const routes = express.Router()

//Get All Books
routes.get("/books", (req, res) => {
    // get all books from MongoDB
    BookModel.find().then((books) => {
        res.send(books)
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
    
    //res.send({message: "Get All Books"})
})

//Add NEW Book
routes.post("/books", async (req, res) => {
    const bookData = req.body
    console.log(bookData)
    
    try {
        //create a new book instance
        const book = new BookModel(bookData)

        //save the book to mongoDB
        const newBook = await book.save()
        res.send(newBook)

    } catch (error){
        res.status(500).send({message: error.message})
    }
    //res.send({message: "Add NEW Book"})
})


//Update existing Book By Id
routes.put("/book/:bookid", (req, res) => {
    
    //Update book by ID
    BookModel.findByIdAndUpdate(req.params.bookid, req.body, {new: true})
        .then((book) => {
            if(book){
                res.send(book)
            } else{
                res.status(404).send({message:"Book not found"})
            }
        }).catch((error) => {
            res.status(500).send({message: error.message})
        })
    //res.send({message: "Update existing Book By Id"})
})


//Delete Book By ID
routes.delete("/book/:bookid", (req, res) => {
    BookModel.findByIdAndDelete(req.params.bookid).then((book) =>{
        if(book){
            res.send(book)
        } else {
            res.status(400).send({message: "Book not found"})
        }
    }).catch((error) =>{
        res.status(500).send({message: error.message})
    })
    //res.send({message: "Delete Book By ID"})
})

//Get Book By ID
routes.get("/book/:bookid", (req, res) => {
    BookModel.findById(req.params.bookid).then((book) =>{
        if(book){
            res.send(book)
        } else {
            res.status(400).send({message: "Book not found"})
        }
    }).catch((error) =>{
        res.status(500).send({message: error.message})
    })
    
    //res.send({message: "Get Book By ID"})
})



//Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    
    BookModel.find().sort({ title: 1 }).then((books) => {
        res.send(books)
    }).catch((error) => {
        res.status(500).send({ message: error.message })
    })

    //res.send({message: "Get All Books in sorted order"})
})
module.exports = routes