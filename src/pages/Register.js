import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Box, Typography, TextField, Button } from '@mui/material'
import axios from 'axios'
import toast from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate()

    // 
    const [inputs, setInputs] = useState({
        name: '',
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
            console.log("API URL:", process.env.REACT_APP_API_URL);

           const {data} =await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/user/register`,{
            username:inputs.name,
            email:inputs.email,
            password:inputs.password
        })

           if(data.success){
            toast.success("User Register Successfully")
            navigate("/login")
           }

            
        } catch (error) {
            console.log(error);
            
        }
      
    }

    return (
        < >
        <form onSubmit={handleSubmit}>

   
            <Box maxWidth={450} display="flex" flexDirection={'column'} alignitems="center" margin="auto" marginTop={5} boxShadow="10px 10px 20px #ccc" padding={3} borderRadius={5}>
                <Typography variant="h4"
                sx={{ textTransform: "uppercase" }}
                padding={3} textAlign="center">
                Register
                </Typography>
                <TextField 
                placeholder="name" 
                name="name"
                value={inputs.name}
                onChange={handleChange}
                margin="normal" 
                type={"text"} 
                required />

            
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
                <Button onClick={() => navigate("/login")} sx={{ borderRadius: 3, marginTop: 3 }} color="primary">
                Already Registered ?Please Login
                </Button>

            </Box>
            </form>
        </>
    )
}

export default Register
