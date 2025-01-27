import pool from "./pool.js";
import { signToken } from "./jwt.js";
import { compare_Pwd } from "./Salt.js";

const validateUserDB = async (req, res) => {
    const { gmail, password } = req.body;
    console.log(gmail , password) ;
    console.log("Validating user in DB...");

    const q1 = "SELECT count(*) AS count, password, name FROM applicant WHERE gmail = ?";

    pool.query(q1, [gmail], async (err, result) => {
        
        if (err || result[0].count === 0) {
            console.log("User does not exist or query error:", err);
            return res.status(404).send({"message":"User does not exist"});
        }

        try {
            const valid = await compare_Pwd(password, result[0].password);

            if (valid) {
                const token = await signToken(result[0].name, gmail);
               
                res.cookie("applicant_token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production', // Set `secure` only in production
                    sameSite: 'None'
                });
                
                
                return res.status(200).send({"message":" VALID USER"});
            } else {
                return res.status(401).send({"message":" INVALID USER"});
            }
        } catch (err) {
            console.log("Error during validation:", err);
            return res.status(500).send({"message":"Error validating user: " + err});
        }
    });
};

export default validateUserDB;
