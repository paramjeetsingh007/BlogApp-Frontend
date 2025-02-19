import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  // Fetch Blog Details
  const getBlogDetail = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/blog/get-blog/${id}`);
      if (data?.success) {
        setBlog(data?.blog);
        setInputs({
          title: data.blog.title,
          description: data.blog.description,
          image: data?.blog.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogDetail();
  }, [id]);

  // Handle Input Change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/api/v1/blog/update-blog/${id}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
      });
      if (data?.success) {
        toast.success("Blog Updated");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        width={{ xs: "90%", sm: "75%", md: "50%" }} // Responsive width
        maxWidth="600px"
        border={3}
        borderRadius={10}
        padding={3}
        margin="auto"
        boxShadow="10px 10px 20px #ccc"
        display="flex"
        flexDirection="column"
        marginTop="30px"
      >
        <Typography variant="h4" textAlign="center" fontWeight="bold" padding={3} color="gray">
          Update Blog
        </Typography>

        <InputLabel sx={{ mb: 1, mt: 2, fontSize: "20px", fontWeight: "bold" }}>Title</InputLabel>
        <TextField name="title" value={inputs.title} onChange={handleChange} margin="normal" variant="outlined" required />

        <InputLabel sx={{ mb: 1, mt: 2, fontSize: "20px", fontWeight: "bold" }}>Description</InputLabel>
        <TextField name="description" value={inputs.description} onChange={handleChange} margin="normal" variant="outlined" required />

        <InputLabel sx={{ mb: 1, mt: 2, fontSize: "20px", fontWeight: "bold" }}>Image URL</InputLabel>
        <TextField name="image" value={inputs.image} onChange={handleChange} margin="normal" variant="outlined" required />

        <Button type="submit" color="warning" variant="contained" sx={{ mt: 2 }}>
          UPDATE
        </Button>
      </Box>
    </form>
  );
};

export default BlogDetails;
