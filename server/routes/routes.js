const express=require('express');
const uploadFile=require('../controller/file-controller.js');
const upload=require('../utils/upload.js');


const router=express.Router();

router.post('/upload',upload.single('file'),uploadFile);

module.exports=router