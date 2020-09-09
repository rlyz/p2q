const SALT = 'OfF';
const sha256 = require('js-sha256');

module.exports = (db) => {
  let apiget = (request, response) => {
    const stuff = {
      banana: 'oranges',
      kiwi: 'apple'
    };

    response.send(stuff);
  };

  let get = (request, response) => {
    // use quiz model method `get` to retrieve quiz data

    db.quiz.get(request.params.id, (error, quiz) => {
      // queryResult contains quiz data returned from the quiz model
      if (error) {
        console.error('error getting quiz', error);
        response.status(500);
        response.send('server error');
      } else {
        if (quiz === null) {
          // render quiz view in the quiz folder
          response.status(404);
          response.send('not found');
        } else {
          // render quiz view in the quiz folder
          response.render('quiz/show', {quiz: quiz});
        }
      }
    });
  };

  let loginPage = (request, response) => {
    if (request.cookies.login === true && request.cookies !== undefined) {
      let userid = request.cookies.userid;
      response.render(`quiz/id/'${userid}'`, request.cookies);
    } else {
      console.log(request.cookies);
      response.render('quiz/login');
    }
  };

  let loginAttempt = (request, response) => {
    db.quiz.loginQuery(request.body, (err, result) => {
      if (err) {
        console.log(err, 'error at login');
        return;
      } else if (response === null) {
        let text = "CAN'T EVEN REMEMBER YOUR PASSWORD OR USERID?";
        response.redirect('quiz/login', {text});
        return;
      } else {
        let password = sha256(request.body.password);
        if (result[0].pw === password) {
          response.cookie('hmm', sha256(SALT + result[0].name));
          response.cookie('user_id', result[0].id);
          response.cookie('er', true);
          if (result[0].stage == 9) {
            response.render('quiz/endgame', {result: result});
          } else {
            response.render('quiz/home', {result: result});
          }
        } else {
          let text = 'WRONG PASSWORD RETARD';
          response.render('quiz/login', {text: text});
        }
      }
    });
  };

  let registerPage = (request, response) => {
    if (request.cookies.login === true && request.cookies.er === undefined) {
      let userid = request.cookies.userid;
      response.render(`quiz/id/'${userid}'`, request.cookies);
    } else {
      response.render('quiz/register');
    }
  };

  let registerAttempt = (request, response) => {
    console.log(request.body, `register attempt request`);
    request.body.password = sha256(request.body.password);
    db.quiz.registerQuery(request.body, (error, result) => {
      if (error) {
        console.log(error, 'registerattempt error controller');
        // let text = {}
        // response.redirect('quiz/register')
      } else {
        let text = 'REGISTRATION SUCCESSFUL';
        response.render('quiz/login', {text});
      }
    });
  };

  let ansAttempt = (request, response) => {
    console.log(request.cookies);
    let userid = request.cookies.user_id;
    db.quiz.ansQuery(userid, request.body, (error, result) => {
      if (error) {
        console.log(error, 'ansatttempt error controller');
      } else {
        if (result[0].stage == 9) {
          response.render('quiz/endgame', {result: result});
        } else {
          response.render('quiz/home', {result: result});
        }
      }
    });
  };

  let logout = (request, response) => {
    response.clearCookie('hmm');
    response.clearCookie('user_id');
    response.clearCookie('er');
    response.redirect('/quiz/login');
  };

  let display = (request, response) => {
    response.render('quiz/home', {result: result});
  };
  return {
    get,
    apiget,
    loginPage,
    loginAttempt,
    registerPage,
    registerAttempt,
    display,
    ansAttempt,
    logout
  };
};
