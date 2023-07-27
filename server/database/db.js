const mongoose=require('mongoose');
require('dotenv').config();



const DBConnection=async()=>{
    const uri=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.dhl2gqp.mongodb.net/?retryWrites=true&w=majority`

    try{
        await mongoose.connect(uri,{useNewUrlParser:true});
        console.log("Database connected");
    }
    catch(error)
    {
        console.log("error occur during db connection",error.message);
    }
}

module.exports=DBConnection