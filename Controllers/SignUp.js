import addUser from "../Config/createUser.js";

const addNewUser = async(req , res)=>{
    console.log("HERE I AM ") ;
    await addUser(req).then((result)=>{
        console.log(result) ;
        return res.status(200).send("USER CREATED SUCCESSFULLY ") ;
    }).catch((err)=>{
        return res.status(400).send("ERROR OCCURED " + err ) ;
    })
}

export default addNewUser ;