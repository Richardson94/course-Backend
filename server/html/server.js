const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(
  '/assets',
  express.static('assets', {
    etag: false,
    maxAge: '5h',
  })
); //middleware

app.get('/', function (req, res) {
  // res.sendFile('index.html', {
  //   root: __dirname,
  // });
  //  res.send(__dirname);

  res.render('index.ejs');
});

app.listen(3000);
