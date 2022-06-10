const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bookIssueSchema = require("../models/bookissue");
const AdminSchema = require("../models/adminModule");
const jwt=require('jsonwebtoken');
const totalBooks = require('../models/books');
const categorySchema = require('../models/category');
const studentVerify = require('../studentAuth/authStudent');
const authorSchema = require('../models/authorSchema');
const bookrequestschema = require('../models/bookrequest');
const IssueRequestSchema = require('../models/issuerequest');
const StudentSchema = require('../models/student');

router.get('/getdata', (req, res) => {
    res.json({ message: "ok status" });
})

// Book Issued 

router.post('/bookissued', async (req, res) => {
    const addData = bookIssueSchema({
        name: req.body.name,
        pageno: req.body.pageno,
        author: req.body.author,
        category: req.body.category,
        rollno: req.body.rollno,
        fromdate: req.body.fromdate,
        todate: req.body.todate,
        thumbnail: req.body.thumbnail
    });

    try {
        const add = await addData.save();
        return res.send(add);
    } catch (error) {
        console.log(error)
        return res.send(error);
    }
});

router.get('/getbookissued', async (req,res)=>{
    try {
        const getBooks = await bookIssueSchema.find();
        res.send(getBooks);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.get('/getBookIssuedById/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const getIssuedBooks = await bookIssueSchema.findById(id);
        res.send(getIssuedBooks);
    } catch (error) {
        res.send(error);
    }
});

router.put('/updateBookIssuedById/:id', async (req,res) => {
    const id = req.params.id;
    const updateData = {
        name: req.body.name,
        pageno: req.body.pageno,
        author: req.body.author,
        category: req.body.category,
        rollno: req.body.rollno,
        fromdate: req.body.fromdate,
        todate: req.body.todate,
        thumbnail: req.body.thumbnail
    }

    try {
        const update = await bookIssueSchema.findByIdAndUpdate(id,updateData);
        res.send(update);
    } catch (error) {
        res.send(error);
    }
});

router.delete('/deleteIssuedBooks/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const deleteData = await bookIssueSchema.deleteOne({_id:id});
        res.send(deleteData);
    } catch (error) {
        res.send(error);
    }
})

// Book isses end here


router.post('/registeradmin', async (req, res) => {
    const addData = new AdminSchema({
        firstname: req.body.firstname,
        secondname: req.body.secondname,
        email: req.body.email,
        dateofbirth: req.body.dateofbirth,
        gender: req.body.gender,
        department: req.body.department,
        employid: req.body.employid,
        password: req.body.password
    });

    try {
        const saveAdmin = await addData.save();
        res.send(saveAdmin);
    } catch (error) {
        console.log(error);
        res.status(403).send(error);
    }
});

router.post('/loginadmin', async (req, res) => {
    try {
        const employid = await AdminSchema.findOne({ employid: req.body.employid });
        const password = await AdminSchema.findOne({ password: req.body.password });
        if (!employid) {
            return res.send('No Employ ID is avilable');
        }
        else if (!password) {
            return res.send('Password is wrong');
        }
        else {
            const token = jwt.sign({ _id: AdminSchema._id }, "HELLOMYNAMEISADMINANDIDOALLWORKINLIBRARYMANAGMENT");
            console.log(`the token is ${token}`);
            res.header("auth-token-admin", token).send({ tokengenarate: token, employid: employid.employid });
        }
    } catch (error) {
        res.send(error);
    }
})

// total books functions

router.post('/addtotalbooks', async (req, res) => {
    const addBook = new totalBooks({
        name: req.body.name,
        pageno: req.body.pageno,
        author: req.body.author,
        category: req.body.category,
        price: req.body.price,
        publication: req.body.publication,
        avilablenumber: req.body.avilablenumber,
        thumbnail: req.body.thumbnail
    });

    try {
        const add = await addBook.save();
        res.send(add);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.get('/gettotalbooks/:id', async (req,res) => {
    const id = req.params.id;
    
    try {
        const book = await totalBooks.findById(id);
        res.send(book);    
    } catch (error) {
        res.send(error);
    }
});

router.put('/updateBooks/:id', async (req,res) => {
    const id = req.params.id;

    const updateBooks = {
        name: req.body.name,
        pageno: req.body.pageno,
        author: req.body.author,
        category: req.body.category,
        price: req.body.price,
        publication: req.body.publication,
        avilablenumber: req.body.avilablenumber,
        thumbnail: req.body.thumbnail
    }

    try {
        const update = await totalBooks.findByIdAndUpdate(id,updateBooks);
        res.send(update);
    } catch (error) {
        res.send(error);
    }
});

router.delete('/deletebook/:id', async (req,res)=>{
    const id = req.params.id;
    try {
        const deleteBook = await totalBooks.deleteOne({_id:id});
        res.send(deleteBook);
    } catch (error) {
        res.send(error);
    }
})

router.get('/totalbooks', async (req, res) => {
    try {
        const total = await totalBooks.find();
        res.send(total);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

// Category functions

router.post('/addCategory', async (req, res) => {
    const addCategory = new categorySchema({
        category: req.body.category
    });

    try {
        const add = await addCategory.save();
        res.send(add);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

router.get('/getCategory', async (req, res) => {
    try {
        const category = await categorySchema.find();
        res.send(category);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.get('/getCategoryById/:id', async (req,res) => {
    const id=req.params.id;
    try {
        const category = await categorySchema.findById(id);
        res.send(category);
    } catch (error) {
        res.send(error)
    }
});

router.put('/updateCategory/:id', async (req,res) => {
    const id = req.params.id;
    const updateCategory = {
        category: req.body.category
    }
    try {
        const update = await categorySchema.findByIdAndUpdate(id,updateCategory);
        res.send(update);
    } catch (error) {
        res.send(error);
    }
});

router.delete('/deleteCategory/:id', async (req,res) => {
    const id = req.params.id;

    try {
        const deleteCategory = await categorySchema.deleteOne({_id:id});
        res.send(deleteCategory); 
    } catch (error) {
        res.send(error);
    }
});

// author functions

router.post('/addAuthor', async (req, res) => {
    const addAuthor = new authorSchema({
        author: req.body.author
    });

    try {
        const add = await addAuthor.save();
        res.send(add);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

router.get('/getAuthor', async (req,res) => {
    try {
        const author = await authorSchema.find();
        res.send(author)
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});


router.get('/getAuthorById/:id', async (req,res) => {
    const id = req.params.id;

    try {
        const author = await authorSchema.findById(id);
        res.send(author);
    } catch (error) {
        res.send(error);
    }
})

router.put('/updateAuthor/:id', async (req,res) => {
    const id = req.params.id;
    const updateAuthor = {
        author: req.body.author
    }
   try {
       const update = await authorSchema.findByIdAndUpdate(id,updateAuthor);
       res.send(update);
   } catch (error) {
       res.send(error);
   }
});

router.delete('/deleteAuthor/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const deleteAuthor = await authorSchema.deleteOne({_id:id});
        res.send(deleteAuthor); 
    } catch (error) {
        res.send(error);
    }
});

router.get('/getrequests', async (req,res)=>{
    try {
        const getBooks = await bookrequestschema.find();
        res.send(getBooks);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.get('/getissuerequest', async (req,res)=>{
    try {
        const getBooks = await IssueRequestSchema.find().populate("book").populate("student")
        .then(IssueRequestSchema => {
            res.json(IssueRequestSchema)
        });
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});



module.exports = router;