-- create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE,
  email TEXT UNIQUE,
  stage INTEGER,
  pw TEXT);

  CREATE TABLE IF NOT EXISTS stages (
  id SERIAL PRIMARY KEY,
  stage_id INTEGER UNIQUE,
  question TEXT
  );
