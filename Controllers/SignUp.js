import addUser from "../Config/createUser.js";

const addNewUser = async (req, res) => {
    try {
        const result = await addUser(req, res);
        console.log(result);
        if( !result.includes("Already"))
        return res.status(200).send({"message" : "USER CREATED SUCCESSFULLY"});
        else 
        return res.status(208).send({"message" : "User Already Exists"}) ;
    } catch (err) {
        console.log({"message" : "Error during user creation:",err});
        return res.status(400).send({"message": "Error: " , err});
    }
};

export default addNewUser ;