require('dotenv').config();

let PORT = process.env.PORT;
let AUTH_API_DB = process.env.AUTH_API_MONGODB_URI;
let SESSION_STORE = process.env.AUTH_API_SESSION_MONGODB_URI;
let JWT_SECRET = process.env.JWT_SECRET;
let JWT_EXPIRE = process.env.JWT_EXPIRE;
let JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET;
let MONGO_POOLSIZE = process.env.MONGO_POOLSIZE;
let ACCOUNT_SID=process.env.ACCOUNT_SID;
let AUTH_TOKEN=process.env.AUTH_TOKEN;
let SERVICE_ID=process.env.SERVICE_ID;

if (process.env.NODE_ENV === 'test') {
  AUTH_API_DB = process.env.TEST_MONGODB_URI;
}

module.exports = {
  AUTH_API_DB,
  MONGO_POOLSIZE,
  JWT_ADMIN_SECRET,
  JWT_EXPIRE,
  JWT_SECRET,
  PORT,
  SESSION_STORE,
  ACCOUNT_SID,
  AUTH_TOKEN,
  SERVICE_ID
};