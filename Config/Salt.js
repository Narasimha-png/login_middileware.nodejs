import bcrypt from "bcrypt" ;

export const gen_Salt = async(payload)=>{
    const salt = await bcrypt.genSaltSync(10) ;
    return new Promise(async(resolve , revoke)=>{
        await bcrypt.hash(payload , salt).then((result)=>{
           return resolve(result) ;
        }).catch((err)=>{
           return revoke(err) ;
        })
    })
}

export const compare_Pwd = async(data , hash)=>{
   
    return new Promise(async(resolve , revoke)=>{
        await bcrypt.compare(data, hash).then((result)=>{
            if( result )
                return resolve(true) ;
            else
            return revoke(false) ;
        })
    })
}
