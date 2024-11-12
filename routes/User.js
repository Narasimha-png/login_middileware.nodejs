import express from "express" ;
import addNewUser from "../Controllers/SignUp.js";
import validateUser from "../Controllers/validateUser.js";
const UserRouter = express.Router() ;

UserRouter.post("/signup" , addNewUser ) ;
UserRouter.get("/login" , validateUser )

export default UserRouter ;