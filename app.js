const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/index');
const newMessageRouter = require('./routes/newMessage');

const app = express();
const PORT = 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newMessageRouter);

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
