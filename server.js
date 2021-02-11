const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 4000;

// Controllers
const studentsController = require('./controllers/studentsController');
const teachersController = require('./controllers/teachersController');


//
// app.set('views', [path.join(__dirname, 'views'),
// path.join(__dirname, 'views/students/'), 
// path.join(__dirname, 'views/teachers/')])


// ------------------------------------ MIDDLEWARE

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));


// ------------------------------------ Routes

// Root Route - students
app.get('/', (req, res) => res.send('<h1>Welcome to Students Page and Teachers Page</h1>'))
// Root Route - teachers
// app.get('/', (req, res) => res.send('<h1>Teachers Page</h1>'))

//studentRoutes
app.use('/students', studentsController);
//teacherRoutes
app.use('/teachers', teachersController);


// ------------------------------- START SERVER LISTENER

app.listen(port, () => console.log('Server is listening on port 4000'));
