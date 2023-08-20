// data/student-db.js

const students = [
  {student: 'Dani', current: true},
  {student: 'Timm', current: false},
  {student: 'Kate', current: true}
];

module.exports = {
  getAll: function() {
    return students;
  }
};

const path = require('path');

// require the To Do "database"
const studentDb = require('./data/student-db');


app.get('/students', function(req, res) {
  res.render('students/index', {
    students: studentDb.getAll()
  });
});