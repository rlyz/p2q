module.exports = (app, db) => {
  const quiz = require('./controllers/quiz')(db);
  app.get('/', quiz.loginPage);
  app.get('/quiz/login', quiz.loginPage);
  app.post('/quiz/login', quiz.loginAttempt);
  app.get('/quiz/register', quiz.registerPage);
  app.post('/quiz/register', quiz.registerAttempt);
  app.post('/quiz/home', quiz.loginAttempt);
  app.post('/quiz/home/ansattempt', quiz.ansAttempt);
  app.post('/quiz/logout', quiz.logout);
  // app.get('/api/quiz/:id', quiz.apiget);
};
