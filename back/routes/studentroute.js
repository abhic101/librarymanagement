const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const StudentSchema = require('../models/student');
const jwt=require('jsonwebtoken');
const BookissuedSchema = require("../models/bookissue");
const studentVerify = require('../studentAuth/authStudent');
const totalBooks = require('../models/books');
const BookRequestSchema = require('../models/bookrequest');
const IssueRequestSchema = require('../models/issuerequest');

router.get('/getdata/:id', async (req, res) => {
  const studentRollno=req.params.id;
  try {
    const studentBooks = await BookissuedSchema.find({rollno:studentRollno});
    console.log(studentBooks);
    res.send(studentBooks);
  } catch (error) {
    res.send(error); 
  }
});

router.get('/getallstudent', async (req,res) => {
  try {
    const allStudent = await StudentSchema.find();
    console.log(allStudent);
    res.send(allStudent);
  } catch (error) {
    res.send(error);
  }
})

router.post('/addstudent', async (req, res) => {
  const addStudent = new StudentSchema({
    firstname: req.body.firstname,
    secondname: req.body.secondname,
    email: req.body.email,
    dateofbirth: req.body.dateofbirth,
    gender: req.body.gender,
    department: req.body.department,
    year: req.body.year,
    rollno: req.body.rollno,
    password: req.body.password
  });

  try {
    const saveStudent = await addStudent.save()
    res.send(saveStudent);
  } catch (error) {
    console.log(error);
  }
});

router.post('/loginstudent', async (req, res) => {
  try {
    const rollno = await StudentSchema.findOne({ rollno: req.body.rollno });
    const password = await StudentSchema.findOne({ password: req.body.password });
    if (!rollno) {
      return res.send('No Univesty RollNumber is avilable');
    }
    else if (!password) {
      return res.send('Password is wrong');
    }
    else {
      const token = jwt.sign({ _id: rollno._id }, "HELLOMYNAMEISKANEANDIAMFULLSTACKDEVELOPER");
      console.log(`the token is ${token}`);
      res.header("auth-token" , token).send({ token: token, rollno: rollno.rollno });
    }
  } catch (error) {
    res.send(error);
  }
});

router.get('/getlogin/:rollno',async (req,res)=>{
  try {
    const rollnoStudent=req.params.rollno;
    const studentDetail = await StudentSchema.findOne({rollno:rollnoStudent});
    res.send(studentDetail);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
})

router.put('/updateDetail/:id',studentVerify,async (req,res)=>{
  const updateStudent = {
    firstname: req.body.firstname,
    secondname: req.body.secondname,
    email: req.body.email,
    dateofbirth: req.body.dateofbirth,
    gender: req.body.gender,
    department: req.body.department,
    year: req.body.year,
    rollno: req.body.rollno,
    password:req.body.password
  };
  
  try {
    const id=req.params.id;
    const update=await StudentSchema.findByIdAndUpdate(id,updateStudent,{new: true});
    res.json(update);
  } catch (error) {
    res.send(error);
  }
})

router.put('/changepassword/:id',async (req,res)=>{
  const updatePassword ={
    password:req.body.password
  }

  try {
    const id=req.params.id;
    const update=await StudentSchema.findByIdAndUpdate(id,updatePassword,{new: true});
    res.json(update);
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

router.post('/bookrequest', async (req, res) => {
  const addData = BookRequestSchema({
      name: req.body.name,
      author: req.body.author,
      category: req.body.category,
      publication: req.body.publication
  });

  try {
      const add = await addData.save();
      return res.send(add);
  } catch (error) {
      console.log(error)
      return res.send(error);
  }
});

router.post('/issuerequest', async (req, res) => {
  const addData = IssueRequestSchema({
      student: req.body.student,
      book: req.body.book
  });

  try {
      const add = await addData.save();
      return res.send(add);
  } catch (error) {
      console.log(error)
      return res.send(error);
  }
});


module.exports = router;