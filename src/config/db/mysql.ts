import { Dialect, Sequelize } from 'sequelize'
import mysql from 'mysql2';

const dbName = process.env.MYSQL_DB as string
const dbUser = process.env.MYSQL_USER as string
const dbHost = process.env.MYSQL_HOST as string
const dbDriver = process.env.MYSQL_DRIVER as Dialect
const dbPassword = process.env.MYSQL_PASS as string

const sqlConn = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName
});

const conn = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
});

export default {
  sqlConn, 
  conn
}