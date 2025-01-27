import pool from "./pool.js";
import { signToken } from "./jwt.js";
import { gen_Salt } from "./Salt.js";

const addUser = async(req,res)=>{
    const {gmail , name , password} = req.body ;
    console.log(gmail , name, password ) ;
    const checkQuery = "select count(*) from applicant where gmail=?" ;
   
    const Password = await gen_Salt(password) ;
    console.log(Password) ;
    const RegUser = [gmail , name , Password ] ;
    const PreparedStatement = "insert into applicant (gmail , name , password) values (? , ? ,?) " ;
    return new Promise((resolve , reject)=>{
    pool.query(checkQuery, [gmail] , (err , result )=>{
        if( err ){
            console.log("Error in checking user" , err) ;
            return reject("Error in Checking user "  , err) ;
        }
 
            if( result[0]['count(*)'] != 0 ){
                return reject("user Already Exist") ; 
            }
            else{
                pool.query(PreparedStatement , RegUser , (err , result)=>{
                    if( err ){
                        return reject(err) ;   
                    }
                    else
                     return resolve("Succesfully Created") ;
           }) ;
            }
                  
        })
})
        
}

export default addUser ;