import  createConnection  from "./connection";
import {Schema ,model} from 'mongoose'


interface User{
    id:Number,
    name:String,
    password:String,
    phn:Number,
    address:String,
    email:String
}


const schema= new Schema({
    id:{
        type:Number,
        required:true,
        index:{unique:true}
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phn:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        default:"yogesh.sharma@appinventiv.com"
    },
    token:{
        type:String
    }

});
const Userr = model<User>('User', schema);




export default Userr