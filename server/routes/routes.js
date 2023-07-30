const express=require('express');
const uploadFile=require('../controller/file-controller.js');
const upload=require('../utils/upload.js');
const getFiles=require('../controller/file-fetch-controller.js');
const downloadImage=require('../controller/download-controller.js')



const router=express.Router();

router.post('/upload',upload.single('file'),uploadFile);
router.get('/files',getFiles);
router.get('/file/:fileId',downloadImage);

//should not put semicolon after module.exports
module.exports=router