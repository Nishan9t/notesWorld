import logo from './logo.svg';
import {useEffect, useRef, useState} from 'react';
import './App.css';

function App() {

  const fileInputRef=useRef();
  const [file,setFile]=useState([]);

  useEffect(()=>{
    
    const getPdf=async()=>{

      if(file)
      {
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

        


      }
    }
    getPdf();

  },[file])

  const uploadClick=()=>{
    fileInputRef.current.click();
  }


  return (
    <div className='bg-yellow-200'>
        <div className="flex flex-col mt-16 bg-gray-200 w-6/12 m-auto p-44">
          <h1 className="text-5xl font-bold text-center font-mono">Upload your notes ...</h1>
          <button onClick={()=>uploadClick()} className="self-center mt-8 text-xl border-2 py-2 px-4 rounded-lg bg-blue-600 hover:bg-green-300 hover:px-6">Upload</button>
          <input type="file"  className="self-center mt-16 ml-16 hidden" ref={fileInputRef} onChange={(e)=>{setFile(e.target.files[0])}}/>
         </div>
      </div>
  );
}

export default App;
