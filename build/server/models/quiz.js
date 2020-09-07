const maxLvl = 8;/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let create = (pokemon, callback) => {
    // set up query
    const queryString = `INSERT INTO pokemons (name, num, img, weight, height)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [pokemon.name, pokemon.num, pokemon.img, pokemon.weight, pokemon.height];

    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed

      if (error) {
        console.log('query error', error);

        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows[0]);
        } else {
          callback(null, null);
        }
      }
    });
  };

  let get = (id, callback) => {
    const values = [id];

    dbPoolInstance.query('SELECT * from users WHERE id=$1', values, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          console.log('hi');
          callback(null, queryResult.rows[0]);
        } else {
          callback(null, null);
        }
      }
    });
  };

  let loginQuery = (request, callback) => {
    const values = [request.username];
    let query = `SELECT * FROM (SELECT USERS.ID, USERS.USERNAME, USERS.PW, USERS.STAGE, STAGES.QUESTION, STAGES.ANS FROM users INNER JOIN STAGES ON USERS.STAGE = STAGES.STAGE_id) AS FUCK where username = $1`;
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        console.log(error, 'login query error');
      } else {
        let query = `SELECT USERS.ID, USERS.USERNAME, USERS.STAGE, STAGES.QUESTION, STAGES.ANS FROM users INNER JOIN STAGES ON USERS.STAGE = STAGES.STAGE_id ORDER BY stage DESC`;
        dbPoolInstance.query(query, (err, res) => {
          if (err) {
            console.log(err, 'err in nested query');
          } else {
            let combi = [...result.rows, ...res.rows];
            console.log(combi);
            callback(error, combi);
          }
        });
      }
    });
  };

  let registerQuery = (request, callback) => {
    const values = [request.username, request.email, 1, request.password];
    let query = `INSERT INTO USERS (username,email,stage,pw) VALUES ($1,$2,$3,$4)`;
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        console.log(error, 'regster query error');
      } else {
        callback(null, result);
      }
    });
  };

  let ansQuery = (userid, request, callback) => {
    const values = [userid];
    let query = `SELECT * FROM (SELECT USERS.ID, USERS.USERNAME, USERS.PW, USERS.STAGE, STAGES.QUESTION, STAGES.ANS FROM users INNER JOIN STAGES ON USERS.STAGE = STAGES.STAGE_id) AS FUCK where id = $1`;
    dbPoolInstance.query(query, values, (error, result) => {
      if (error) {
        console.log(error, `err in ansquery`);
      } else {
        if (request.stage == 9){
            console.log(`stage8`)
          let query = `SELECT USERS.ID, USERS.USERNAME, USERS.STAGE, STAGES.QUESTION, STAGES.ANS FROM users INNER JOIN STAGES ON USERS.STAGE = STAGES.STAGE_id ORDER BY stage DESC`;
              dbPoolInstance.query(query, (err, res) => {
                if (err) {
                  console.log(err, 'err in nested query');
                } else {
                  const values = [userid];
                  let query = `SELECT * FROM (SELECT USERS.ID, USERS.USERNAME, USERS.PW, USERS.STAGE, STAGES.QUESTION, STAGES.ANS FROM users INNER JOIN STAGES ON USERS.STAGE = STAGES.STAGE_id) AS FUCK where id = $1`;
                  dbPoolInstance.query(query, values, (err, resulted) => {
                    if (err) {
                      console.log(err, 'ERR YOUR FUCKING FACE');
                    } else {
                      let combi = [...resulted.rows, ...res.rows];
                      console.log(combi, `COMBIIIIIIIIIIIIIIIIIIIIII`);
                      callback(error, combi);
                      return;
                    }
                  });
                }
              });
        } else if (result.rows[0].ans === request.answer) {
          let nxtlvl = parseInt(request.stage) + 1;
          const values = [nxtlvl, userid];
          let query = `UPDATE USERS set stage = $1 where id = $2`;
          dbPoolInstance.query(query, values, (err, ress) => {
            if (err) {
              console.log(err, `err in nested updated query`);
            } else {
              console.log(ress, 'fucking hell');
              let query = `SELECT USERS.ID, USERS.USERNAME, USERS.STAGE, STAGES.QUESTION, STAGES.ANS FROM users INNER JOIN STAGES ON USERS.STAGE = STAGES.STAGE_id ORDER BY stage DESC`;
              dbPoolInstance.query(query, (err, res) => {
                if (err) {
                  console.log(err, 'err in nested query');
                } else {
                  const values = [userid];
                  let query = `SELECT * FROM (SELECT USERS.ID, USERS.USERNAME, USERS.PW, USERS.STAGE, STAGES.QUESTION, STAGES.ANS FROM users INNER JOIN STAGES ON USERS.STAGE = STAGES.STAGE_id) AS FUCK where id = $1`;
                  dbPoolInstance.query(query, values, (err, resulted) => {
                    if (err) {
                      console.log(err, 'ERR YOUR FUCKING FACE');
                    } else {
                      let combi = [...resulted.rows, ...res.rows];
                      console.log(combi, `COMBIIIIIIIIIIIIIIIIIIIIII`);
                      callback(error, combi);
                    }
                  });
                }
              });
            }
          });
        }
      }
    });
  };

  return {
    create,
    get,
    loginQuery,
    registerQuery,
    ansQuery
  };
};
