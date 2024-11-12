import pool from "./pool.js";
import { signToken } from "./jwt.js";
import { compare_Pwd } from "./Salt.js";

const validateUserDB = async(req , res)=>{
    const {gmail , password}  = req.body ;
    const q1 = "select count(*), password , name from applicant where gmail=?" ;
    const resultpwd =new Promise(async(resolve , revoke)=>{
         pool.query(q1 , [gmail] , async(err , result )=>{
            if( err || result.count == 0 )
                res.status(400).send("User Do not exist ") ;
            else{
                const pwd = await compare_Pwd(password , result[0].password).then(async(valid)=>{
                        const token = await signToken(result[0].name , gmail ) ;
                        res.cookie("applicant_token" , token ) ;
                        res.status(200).send("VALID USER") ;   
                    
                }).catch((err)=>{
                    res.status(400).send("INVALID USER " + err ) ;
                })
                
            }
        }) ;
        
    })
    
    
}
export default validateUserDB ;