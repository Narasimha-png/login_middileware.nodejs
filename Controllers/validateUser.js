import validateUserDB from "../Config/validateUserDB.js"
const validateUser = (req ,res)=>{
     validateUserDB(req , res)  ;
}
export default validateUser ;