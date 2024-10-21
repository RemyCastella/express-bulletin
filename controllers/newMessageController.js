const db = require('../db/queries');

function newMessageGet(req, res) {
  res.render('form');
}

async function newMessagePost(req, res) {
  const { usernameText, messageText } = req.body;
  db.addNewMessage(usernameText, messageText);
  res.redirect('/');
}

module.exports = { newMessageGet, newMessagePost };
