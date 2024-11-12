import jwt from "jsonwebtoken" ;

export async function signToken(username , gmail ){
    const result = await jwt.sign({ name:username , 
        gmail : gmail 
     } , process.env.SECRET_KEY , {expiresIn:`30d`} ) ;
    return result ;
}

export async function  verifyToken(token) {
    const result = await jwt.verify(token , process.env.SECRET_KEY )
    return result ;
}
