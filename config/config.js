require('dotenv').config();

const development = {
  dialect : 'mysql',
  host : process.env.DB_HOST,
  port : process.env.DB_PORT,
  username : process.env.DB_USER,
  password : process.env.DB_PW,
  database : process.env.DB_NAME
};


const test = {
  dialect : 'mysql',
  host : process.env.DB_HOST,
  port : process.env.DB_PORT,
  username : process.env.DB_USER,
  password : process.env.DB_PW,
  database : process.env.DB_NAME
};

const production = {
  dialect : 'mysql',
  host : process.env.DB_HOST,
  port : process.env.DB_PORT,
  username : process.env.DB_USER,
  password : process.env.DB_PW,
  database : process.env.DB_NAME
};
module.exports = { development, test, production };

