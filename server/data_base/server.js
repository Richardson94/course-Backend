const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = new Sequelize('project-backend', null, null, {
  dialect: 'sqlite',
  storage: './project-backend',
});

//let db = new sqlite3.Database('project-backend');

//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');

app.post('/pending', function (req, res) {
  db.run(`INSERT INTO tasks(description) VALUES(?)`, req.body.description);
  res.send('Insertion completed');
});

app.listen(3000);

// process.on('SIGINT', function () {
//   console.log('bye - from: server');
//   db.close();
//   process.exit;
// });
