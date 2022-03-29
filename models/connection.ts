import mongoose from 'mongoose'
 async function createConnection()
{
   try{
      await mongoose.connect('mongodb://localhost:27017/db');
      console.log("connectd");
   }catch(err){
      console.log(err);
   }
   
}

 export = createConnection;