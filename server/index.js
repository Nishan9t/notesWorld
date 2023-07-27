const express=require('express');
const cors=require('cors');


const app=express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT=8000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})