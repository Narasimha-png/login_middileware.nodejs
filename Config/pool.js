import mysql from "mysql2" ;
import dotenv from "dotenv" ;

dotenv.config() ;
const pool = mysql.createPool({
    host:process.env.HOST ,
    port:process.env.MYSQL_PORT ,
    user: process.env.USER,
    password : process.env.PASSWORD ,
    database:process.env.DATABASE ,
    connectionLimit:process.env.CONNECTION_LIMIT
}) ;
 
export default pool ;