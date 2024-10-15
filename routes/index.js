const { Router } = require('express');
const indexRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Remy',
    added: new Date(),
  },
  {
    text: "How's it going!",
    user: 'Simon',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { messages });
});

indexRouter.post('/new', (req, res) => {
  const { usernameText, messageText } = req.body;
  messages.push({
    text: messageText,
    user: usernameText,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = indexRouter;
