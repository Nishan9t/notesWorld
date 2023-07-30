import logo from './logo.svg';
import {useEffect, useRef, useState} from 'react';
import './App.css';
import { uploadFile,getFiles } from './services/api';
import axios from 'axios';

function App() {

  const fileInputRef=useRef();
  const [file,setFile]=useState([]);
  const [result,setResult]=useState([]);

 

  useEffect(()=>{
    
    const getPdf=async()=>{

      if(file)
      {
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response=await uploadFile(data);
        
        

      }
    }
    getPdf();
   

  },[file])

  const uploadClick=()=>{
    fileInputRef.current.click();
  }

  const handleGet=async()=>{
    let response=await getFiles();
    console.log(response);
   

  }


  return (
    <div className='bg-yellow-200'>
        <div className="flex flex-col mt-16 bg-gray-200 w-6/12 m-auto p-44">
          <h1 className="text-5xl font-bold text-center font-mono">Upload your notes ...</h1>
          <button onClick={()=>uploadClick()} className="self-center mt-8 text-xl border-2 py-2 px-4 rounded-lg bg-blue-600 font-mono font-bold hover:bg-green-300 ">Upload</button>
          <input type="file"  className="self-center mt-16 ml-16 hidden " ref={fileInputRef} onChange={(e)=>{setFile(e.target.files[0])}}/>
         </div>
         <button onClick={()=>handleGet()} className="self-center mt-8 text-xl border-2 py-2 px-4 rounded-lg bg-blue-600 font-mono font-bold hover:bg-green-300 ">GetFiles</button>
       
      </div>
  );
}

export default App;
