import md5 from 'md5'
const aedes = require('aedes')();
import mqtt from 'mqtt';
import jwt from 'jsonwebtoken'
import Userr from './models/user';
import createConnection from "./models/connection";
createConnection()
let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSW5kcmFwcmVldCIsInBhc3N3b3JkIjoiWW9nZXNoIiwiaWF0IjoxNjQ4NTQwNDgzLCJleHAiOjE2NDg1NDQwODN9.cn3wZX1r-vmqAu6disYqpAqV-_6QnJK-QbuOMEFzqG0";
async function publish() {
    let auth = await jwtverification(token);
    if(auth===true)
    {
        let client = mqtt.connect('http://localhost:1883');

        client.on('connect',() => {
        console.log('client connected');
        client.publish('topic-node', "🔥🔥 hello node developers  🔥🔥");
        });
    }
    else{
        console.log("This is not autherized publisher !")
    }
}
publish()


//jwt verified function
async function jwtverification(token: any) 
{
    let name: any, password:any, err:any;

    await jwt.verify(token, "this is dummy text", (error: any, decodedToken: any) => {
        if(error){
            err = error;
            console.log(error)
        }
        else{
            console.log(decodedToken)
            name = decodedToken.name;
            password = md5(decodedToken.password.toString());

        }
    })  
    const userr = await Userr.findOne({name, password});
            if(userr){
                console.log()
                return true;
            }
            else{
                return false;
            }
}
//


