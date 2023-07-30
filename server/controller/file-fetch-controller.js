const File=require('../models/file.js');

const getFiles=async(req,res)=>{

    const data= await File.find({})

    res.status(200).json({success:true,data:data});

}
module.exports=getFiles