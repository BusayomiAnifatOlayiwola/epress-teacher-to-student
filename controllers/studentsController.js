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
      res.redirect('/students/new');
    } catch(e) {
      console.log(e.message)
    }
  });


//in show view
// GET - to find student by id which is there primary key
//localhost:4000/students/1
router.get('/:id', async(req, res) => {
    try{
    const foundStudent = await db.student.findByPk(req.params.id)
    
      res.render('students/show.ejs', {
        student: foundStudent ,
  });
    }catch(e) {
      console.log(e)
  }
  });

  // GET Students Edit
//localhost:4000/students/1/edit
router.get('/:id/edit', async(req, res) => {
    try{
    const student = await db.student.findOne({ where: {id: req.params.id}})
    
      res.render('students/edit.ejs', { student:student });
    } catch(e) {
  console.log(e)
    }
    });
  

    // PUT - for Students Update
//localhost:4000/students/3
router.put('/:id', async(req, res) => {
    try{
  const updatedStudent = await db.student.update({ sname: req.body.sname}, {
      where: {
        id: req.params.id
      }
    })
    
        console.log('Updated Student = ', updatedStudent);
        res.redirect('/students');
  
  }catch(e){
    console.log(e.message)
  }
  });
  
  // DELETE Students Destroy
//localhost:4000/students/1
router.delete('/:id', async(req, res) => {
    try {
      await db.student.destroy({
        where: {
          id: req.params.id
        }
      })
      res.redirect('/students');
    } catch(e) {
      console.log(e.message)
    }
  });
  




  module.exports=router;