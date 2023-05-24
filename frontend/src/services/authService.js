import axios from "axios"
import {toast} from "react-toastify"


export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL


export const validateEmail = (email) =>{
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}


//Register User
export const registerUser = async(userData)=>{
    try{
        const response = await axios.post(`${BACKEND_URL}/api/users/register`,userData, 
        {withCredentials: true}
        )
        console.log(response.statusText)
        if(response.statusText === "Created"){
            toast.success("User registered Successfully")
        }
        return response.data
    }
    catch(error){
        const message = (error.response && error.resonse.data && error.resposnse.data.message) || error.message || error.toString();
        toast.error(message);
    }
}


// Login User
export const loginUser = async(userData)=>{
    try{
        const response = await axios.post(`${BACKEND_URL}/api/users/login`,userData)
        // console.log(response.statusText)
        if(response.statusText === "OK"){
            toast.success("Login Successful...")
        }
        return response.data
    }
    catch(error){
        const message = (error.response && error.resonse.data && error.resposnse.data.message) || error.message || error.toString();
        toast.error(message);
    }
}