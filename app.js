import express from "express" ;
import dotenv from "dotenv" ;
import exp from "constants";
import UserRouter from "./routes/User.js";
import cors from "cors" ;
import { signToken , verifyToken } from "./Config/jwt.js";

const App = express() ;
const corsOptions = {
    origin: 'http://localhost:1234', 
    credentials: true,               
  };

App.use(cors(corsOptions)) ;

dotenv.config() ;
App.use(express.json()) ;


App.use("/api/v1/career/user" , UserRouter ) ;

console.log(process.env.PORT) ;

const PORT = process.env.PORT || 6000 ;
App.listen((PORT), (err , res)=>{
    if(err )
        console.log(err) ;
    else
    console.log("localhost:" + PORT ) ;
})



