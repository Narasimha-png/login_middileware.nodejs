import pool from "./pool.js";
import { signToken } from "./jwt.js";
import { gen_Salt } from "./Salt.js";

const addUser = async(req)=>{
    const {gmail , name , password} = req.body ;
    const Password = await gen_Salt(password) ;
    console.log(Password) ;
    const RegUser = [gmail , name , Password ] ;
    const PreparedStatement = "insert into applicant (gmail , name , password) values (? , ? ,?) " ;
    new Promise((resolve , revoke)=>{
        pool.query(PreparedStatement , RegUser , (err , res)=>{
            if( err ){
                return revoke(err) ;   
            }
            else
             return resolve(res) ;
        })
    })
   
}

export default addUser ;