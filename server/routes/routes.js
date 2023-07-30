const express=require('express');
const uploadFile=require('../controller/file-controller.js');
const upload=require('../utils/upload.js');
const getFiles=require('../controller/file-fetch-controller.js')



const router=express.Router();

router.post('/upload',upload.single('file'),uploadFile);
router.get('/files',getFiles);

//should not put semicolon after module.exports
module.exports=router