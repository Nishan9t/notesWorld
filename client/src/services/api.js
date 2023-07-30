
import axios from 'axios';

const URL="http://localhost:8000";

export const uploadFile=async(data)=>{
    try{

        let response=await axios.post(`${URL}/upload`,data);
        return response.data;
    }
    catch(error)
    {
        console.log('Error while calling the api',error.message);
    }

}

export const getFiles=async()=>{
    try{
        let response=await axios.get(`${URL}/files`);
        return response.data;
    } catch(error)
    {
        console.log('Error while calling the api',error.message);
    }
}




