const express = require('express');
const router = express.Router();

// Database
const db  = require('../models');

// GET students Index
//localhost:4000/students
router.get('/', async(req, res) => {
    try{
      const foundTeachers = await db.teacher.findAll()
      res.render('teachers/index.ejs', {
        teachers: foundTeachers,
      });
    }catch(e){
       console.log(e)
      
    }
  });



  // GET Teachers New
//localhost:4000/teacher/new
//for showing the form
router.get('/new', (req, res) => {
    res.render('teachers/new.ejs');
  });

  
  // POST Teacher Create
// localhost:4000/teacher because we are in the
// app.use('/teachers', teachersController);
router.post('/', async(req, res) => {
    try {
      console.log(req.body);
      const createdTeacher = await db.teacher.create(req.body)
      console.log('Created Teacher = ', createdTeacher);
      res.redirect('/teachers');
    } catch(e) {
      console.log(e.message)
    }
  });

  module.exports=router;