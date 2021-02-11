const express = require('express');
const router = express.Router();

// Database
const db  = require('../models');


// GET students Index
//localhost:4000/students
router.get('/', async(req, res) => {
    try{
      const foundStudents = await db.student.findAll()
      res.render('students/index.ejs', {
        students: foundStudents,
      });
    }catch(e){
       console.log(e)
     
    }
  });



  // GET students New
//localhost:4000/student/new
//for showing the form
router.get('/new', (req, res) => {
    res.render('students/new.ejs');
  });

  
  // POST Students Create
// localhost:4000/student because we are in the
// app.use('/students', studentsController);
router.post('/', async(req, res) => {
    try {
      console.log(req.body);
      const createdStudent = await db.student.create(req.body)
      console.log('Created Student = ', createdStudent);
      res.redirect('/students');
    } catch(e) {
      console.log(e.message)
    }
  });


  module.exports=router;