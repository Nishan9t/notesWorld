const File=require('../models/file.js')

const downloadImage=async(req,res)=>{
    try{
        const file=await File.findById(req.params.fileId);

        file.downloadContent++;

        await file.save();
        res.download(file.path,file.name);
    }
    catch(error)
    {
        console.log(error.message);
        return res.status(500).json({msg:'Server Error'});
    }

}

module.exports=downloadImage