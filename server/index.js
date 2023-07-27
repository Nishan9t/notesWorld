const express=require('express');
const cors=require('cors');
const DBConnection = require('./database/db');
const router=require('./routes/routes.js');


const app=express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/',router);

const PORT=8000;

DBConnection();
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})