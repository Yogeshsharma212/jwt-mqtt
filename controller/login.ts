import md5 from 'md5';
import jwt from 'jsonwebtoken'
import User from '../models/user';
import express from 'express';

export default async function login(req:any,res:any,next:any)
{
    
        let {name, password , err} = jwtverification(req.headers.token);
        if(err)
        {
            console.log(err);
            res.send(err);
        }else{
            let pas = md5(String(password))
            const userr = await User.findOne({name, pas});
            if(userr){
                res.send(" successfully loged in ");
            }
            else{
                res.send("User not found");
            }
        }
    
}


//jwt verified function
function jwtverification(token: any) 
{
    let name: any, password:any, err:any;

    jwt.verify(token, "this is dummy text", (error: any, decodedToken: any) => {
        if(error){
            err = error;
        }
        else{
            name = decodedToken.name;
            password = decodedToken.password;

        }
    })  
    return {name, password, err};
}