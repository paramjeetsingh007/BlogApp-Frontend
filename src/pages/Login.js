import React, { useState } from 'react';
import {Box,Typography,TextField,Button} from '@mui/material'
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../redux/store';
import toast from 'react-hot-toast';

const Login = () => {

    const navigate = useNavigate()
    const dispatch=useDispatch()

//state
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
    // handle input change
    const handleChange=(e)=>{
        setInputs((prevstate)=>({
            ...prevstate,
            [e.target.name]:e.target.value
        }))
    }
    //form handle
    const handleSubmit =async(e)=>{
        e.preventDefault()
        try {
           const {data} =await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/user/login`,{
            email:inputs.email,
            password:inputs.password
        })

           if(data.success){
            localStorage.setItem('userId',data?.user._id);
            dispatch(authActions.login())

            toast.success("User login Successfully")
            navigate("/")
           }

            
        } catch (error) {
            console.log(error);
            
        }
      
    }

    return (
        < >
    
        <form onSubmit={handleSubmit}>

   
            <Box maxWidth={450} display="flex" flexDirection={'column'} alignitems="center" margin="auto" marginTop={5} boxShadow="10px 10px 20px #ccc" padding={3} borderRadius={5} >
                <Typography variant="h4"
                sx={{ textTransform: "uppercase" }}
                padding={3} textAlign="center">
                Login
                </Typography>
             
                <TextField 
                placeholder="email" 
                name="email"
                onChange={handleChange} 
                value={inputs.email} 
                margin="normal" 
                type={"email"} 
                required />
                <TextField 
                placeholder="password"  
                 name="password"
                value={inputs.password} 
                onChange={handleChange}
                margin="normal" 
                type={"password"} 
                required />

                <Button type="submit"
                 sx={{ borderRadius: 3, marginTop: 3 }} 
                 variant="contained" color="primary">
                Submit
                </Button>
                <Button onClick={() => navigate("/Register")} sx={{ borderRadius: 3, marginTop: 3 }} color="primary">
               Not a user  ?Please Register
                </Button>

            </Box>
            </form>
        </>
  )
}

export default Login
