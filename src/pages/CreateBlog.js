import React, { useState } from 'react';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CreateBlog = () => {
  const id = localStorage.getItem('userId');
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    image: '',
  });

  // Input change handler
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/blog/create-blog`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success('Blog Created');
        navigate('/my-blogs');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          width: { xs: '90%', sm: '75%', md: '50%' },
          border: 3,
          borderRadius: 2,
          padding: 3,
          margin: 'auto',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          mt: 5,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          padding={2}
          color="gray"
        >
          Create a Blog Post
        </Typography>

        <InputLabel sx={{ mb: 1, fontSize: '18px', fontWeight: 'bold' }}>
          Title
        </InputLabel>
        <TextField
          name="title"
          value={inputs.title}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
          required
        />

        <InputLabel sx={{ mb: 1, fontSize: '18px', fontWeight: 'bold' }}>
          Description
        </InputLabel>
        <TextField
          name="description"
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
        />

        <InputLabel sx={{ mb: 1, fontSize: '18px', fontWeight: 'bold' }}>
          Image URL
        </InputLabel>
        <TextField
          name="image"
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
          required
        />

        <Button type="submit" color="primary" variant="contained" sx={{ mt: 2 }}>
          SUBMIT
        </Button>
      </Box>
    </form>
  );
};

export default CreateBlog;
